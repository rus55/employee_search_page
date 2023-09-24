import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import {requestUserAction} from "../../redux/actions/Actions";
import {useDispatch, useSelector} from "react-redux";
import {Table} from "react-bootstrap";

const UserDetails = () => {
    let {userId} = useParams()
    let [isLoading, setIsLoading] = useState(true)
    const dispatch = useDispatch()
    const user = useSelector(store => store.user)
    const avatar = useSelector(store => store.avatar)
    const userPosts = useSelector(store => store.posts)?.filter(post => post.userId == userId)

    useEffect(() => {
        if (userId) {
            dispatch(requestUserAction(userId))
        }
    }, [userId])

    useEffect(() => {
        setIsLoading(false)
    }, [user])

    return (
        <div>


            {/*<Link to={'/'}>Back</Link>
            {isLoading
                ? <Spinner animation="border"/>
                :
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Key</th>
                        <th>Data</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>name</td>
                        <td>{user?.name}</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>username</td>
                        <td>{user?.username}</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>email</td>
                        <td>{user?.email}</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>address</td>
                        <td>
                            <ul>
                                <li>street: {user?.address?.street}</li>
                                <li>suite: {user?.address?.suite}</li>
                                <li>city: {user?.address?.city}</li>
                                <li>zipcode: {user?.address?.zipcode}</li>
                                <li>geo:
                                    <ul>
                                        <li>lat: {user?.address?.geo?.lat}</li>
                                        <li>lng: {user?.address?.geo?.lng}</li>
                                    </ul>
                                </li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>phone</td>
                        <td>{user?.phone}</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>website</td>
                        <td>{user?.website}</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>company</td>
                        <td>
                            <ul>
                                <li>name: {user?.company?.name}</li>
                                <li>catchPhrase: {user?.company?.catchPhrase}</li>
                                <li>bs: {user?.company?.bs}</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>company</td>
                        <td>
                            <ul>
                                <li>name: {user?.company?.name}</li>
                                <li>catchPhrase: {user?.company?.catchPhrase}</li>
                                <li>bs: {user?.company?.bs}</li>
                            </ul>
                        </td>
                    </tr>
                    </tbody>
                </Table>
            }*/}

            {/*{userPosts?.map(post => {
                return <Post key={post.id} post={post} avatar={avatar} />
            })}*/}
        </div>
    )
}

export default UserDetails;