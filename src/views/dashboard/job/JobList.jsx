import React, { useCallback, useEffect, useState } from "react";
import { DashboardSideBar, HelpLineLoader, JobPagination, JobTable, SearchJobInput } from "../../../components";
import { Link, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from '../../../features/user/userSlice';
import { getJobs } from "../../../features/job/jobSlice";

function JobList() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch()

  const [query, setQuery] = useSearchParams();
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);

  const [totalPages, setTotalPages] = useState(0)

  const onSearchChange = (e) => {
    setSearch(e.target.value);
    setQuery(query => {
      query.set('desc', e.target.value);
      query.set('page', 1);
      return query
    });
  }

  const onSearch = (e) => {
    e.preventDefault()
    setQuery(query => {
      query.set('desc', search)
      return query
    })
  }

  const onPageSizeChange = (e) => {
    const newSize = Number(e.target.value);
    setPageSize(newSize);
    setQuery(query => {
      query.set('size', newSize);
      query.set('page', 1)
      return query
    });
  }

  const get = useCallback(async () => {
    const { payload } = await dispatch(getJobs({page: Number(query.get('page')) || 1, pageSize: Number(query.get('size')) || 10, desc: query.get('desc') || ''}))
    setTotalPages(payload.totalPages || 1)
    setJobs(payload.jobs)
  }, [dispatch, setTotalPages, setJobs, query])

  useEffect(() => {
    setSearch(query.get('desc') || '');
    setCurrentPage(Number(query.get('page')) || 1); // Default to page 1 if not set
    setPageSize(Number(query.get('size')) || 10); // Default to size 10 if not set
    get()

    setIsLoading(false);
  }, [query, setSearch, setCurrentPage, setPageSize, get]);

  return (
    <div className="bg-green d-flex">
      <DashboardSideBar />
      <div className="dash-content">
        <header className="d-flex flex-space-b pd-32 text-white">
          <h1 className="font-league text-green1">Vagas</h1>
          <img src={user.profilePicUrl ? user.profilePicUrl : undefined} alt={`Imagem de perfil de ${user.name}`} style={{ width: '75px', height: '75px', borderRadius: 40, border: '5px solid #285430', background: '#285430' }} />
        </header>
        {
          isLoading 
            ? <HelpLineLoader />
            : <div className="pd-32">
                <div className="d-flex mb-16" style={{ width: '100%', gap: '16px' }}>
                  <SearchJobInput onChange={onSearchChange} onSearch={onSearch} value={search} />
                  <Link to={'/dashboard/jobs/add'} className="d-flex flex-center pd-h-16 no-deco" style={{ backgroundColor: '#285430', borderRadius: '10px'}}>
                    <span style={{color: 'white'}} className="font-league font-24 bold">Criar Vaga</span>
                  </Link>
                </div>
                <JobTable jobs={jobs} />
                <JobPagination totalPages={totalPages} query={query} setQuery={setQuery} currentPage={currentPage} pageSize={pageSize} onPageSizeChange={onPageSizeChange} />
              </div>
        }
      </div>
    </div>
  );
}

export default JobList;
