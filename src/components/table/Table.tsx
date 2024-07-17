import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Table.module.scss';
import Navbar from '../../template/Navbar/Navbar';

type Data = {
    id: number;
    name: string;
    email: string;
    [key: string]: any;
};

const Table = () => {
    const [data, setData] = useState<Data[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        axios.get(import.meta.env.VITE_API_URL)
            .then(response => {
                setData(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.log(error);
                setError('Error fetching data');
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <div>
                {/* <Navbar/> */}
            </div>

            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
};

export default Table;
