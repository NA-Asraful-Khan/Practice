import React, { useEffect, useState } from 'react'

const GetApi = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network Response Was Not OK!");
                }

                return response.json();
            })
            .then((data) => {
                setData(data);
                setLoading(false)
                console.log(data)
            })
            .catch((error) => console.log("Error:", error))
    }, [])

    return (
        <div>
            {
                loading ? (<p>Loading</p>
                ) : (
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>User Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((list, index) => (
                                    <tr key={index}>
                                        <td>{list.id}</td>
                                        <td>{list.name}</td>
                                        <td>{list.email}</td>
                                        <td>{list.username}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                )
            }

        </div>
    )
}

export default GetApi