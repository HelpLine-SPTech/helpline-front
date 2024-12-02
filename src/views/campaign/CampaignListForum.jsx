import React, { useCallback, useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import NavBarOng from "../../components/Institucional/NavBarOng/NavBarOng";
import NavBarVoluntario from "../../components/Institucional/NavBarVoluntario/NavBarVoluntario";
import "./CampaignListForum.css";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../features/user/userSlice";
import { ToastContainer } from "react-toastify";
import { getCampaigns } from "../../features/campaign/campaignSlice";
import CampaignCard from "../../components/campaign/CampaignCard";

function CampaignListForum() {
    const dispatch = useDispatch();

    const user = useSelector(selectUser);

    const [campaigns, setCampaigns] = useState([])

    const [postContent, setPostContent] = useState("");

    const load = useCallback(async () => {
        const { payload } = await dispatch(getCampaigns({ page: 1, pageSize: 100, desc: "" }))
        console.log(payload)
        setCampaigns(payload.campaigns)
    }, [dispatch]);

    useEffect(() => {
        load();
    }, [load]);

    return (
        <>
            {user.type === "OngEntity" ? <NavBarOng /> : <NavBarVoluntario />}
            <ToastContainer />
            <div className="forum-ong">
                <div className="direita">
                    {/* {posts && posts.map((post) => (
                        <Post
                            key={post.id}
                            postId={post.id}
                            user={post.user}
                            likes={post.likes}
                            content={post.content}
                            comments={post.comments}
                            liked={post.liked}
                            photo={post.images}
                        />
                    ))} */}
                    {
                        campaigns && campaigns.map((c) => (
                            <CampaignCard campaign={c} />
                        ))
                    }
                </div>
            </div>
            <div style={{ marginTop: "64px" }}>
                <Footer />
            </div>
        </>
    );
}

export default CampaignListForum;
