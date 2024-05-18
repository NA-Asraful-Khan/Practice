import React, { useEffect, useState } from 'react'

const GetApi = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

     // Fetch mock data from the JSONPlaceholder API
     const fetchData = async () => {
        try {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/users"
            );
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const jsonData = await response.json();
            setData(jsonData);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    // Initial data fetch on component mount
    useEffect(() => {
        fetchData();
    }, []);


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