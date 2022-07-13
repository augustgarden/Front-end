import React from "react";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';

function ThemecastContent(){
    return (
        <div className="ThemecastContent">
            <Box className="outer_box">
                    <Box className="upper_box" >
                        <Chip className="recruit_chip" label="모집중" size="small" />
                        <PersonIcon className="person" />
                    </Box>
                    <div className="lower_box" >
                        <div style={{width:"180px"}}>
                            <p style={{fontSize:"13px"}}>SW 종합 커뮤니티, DeVin</p>
                        </div>
                        <div style={{width:"180px"}}>
                            <p style={{fontSize:"10px"}}>#웹 #백엔드 #프론트엔드 #디자이너</p>
                        </div>
                        <div className="tag_wrapper" >
                            <div>
                                <Chip className="tags" label="대면" size="small" />
                                <Chip className="tags" label="서울" size="small" />
                                <Chip className="tags" label="초급" size="small" />
                            </div>
                            <div>
                                <span style={{fontSize:"13px"}}>
                                    <FavoriteIcon style={{color:"gray", width:"15px",height:"15px"}} />12
                                </span>
                            </div>
                        </div>
                    </div>
            </Box>
        </div>
    );
}

export default ThemecastContent;

