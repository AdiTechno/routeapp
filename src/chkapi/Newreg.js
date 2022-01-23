import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { connect } from 'react-redux'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { getPosts } from '../redux/actions'

const Newreg = ({post, getPosts }) => {
    useEffect(() => {
        getPosts();
    }, [getPosts]);
console.log(post)
    return (<div>
        <h1> New Registration Record</h1>
        <table className='table'>
                   
                   <tr>
                   <td>Entry No</td>
                        <td>Form No</td>
                        <td>Name</td>
                        <td>Fathers Name</td>
                        <td>Mothers Name</td>
                        <td>--</td>
                        <td>--</td>
                    </tr>
                    {post && post.map((item,index)=>
                        <tr>
                            <td>{item.entryNo}</td>
                            <td>{item.formNo}</td>
                            <td>{item.sname}</td>
                            <td>{item.fname}</td>
                            <td>{item.mname}</td>
                            <td><EditIcon style={{ fontSize: 35 }}/><span><DeleteIcon style={{ fontSize: 20 }}/></span></td>
                            
                        </tr>
                        )}
                    </table> 

    </div>)
};

const mapStateToProps = (state) => ({
    post: state.posts,
  });

export default connect(mapStateToProps, { getPosts })(Newreg)