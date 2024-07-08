import { FC } from "react";
import { Map } from "../map";
import { SlTarget } from "react-icons/sl";
import { IHOME } from "../../@types/home";
import "./home.css"




export const Home:FC<IHOME> = ({ data, query, setQuery, handleQuery }) => {

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        handleQuery(query);
      };

    return (<div className="parent">
        <h2 className="title">IP Address Tracker</h2>

        <form className="search_container" onSubmit={onSubmit}>
            <input type="text" className="input" autoFocus 
                placeholder="Enter ip address to search" value={query} 
                onChange={(event: React.FormEvent<HTMLInputElement>) =>
                    setQuery(event.currentTarget.value)
                  }
            />
            <button className="search_button" type="submit"><SlTarget />


            </button>
        </form>

        <div className="info_wrapper">
            <div className="info">
                <h2>IP Address</h2>
                <strong>{data?.ip}</strong>
            </div>
            <div className="info">
                <h2>Location</h2>
                <strong> {data?.region} , {data?.country} </strong>
            </div>
            <div className="info">
                <h2>Timezone</h2>
                <strong>UTC {data?.timezone}</strong>
            </div>
            <div className="info">
                <h2>Internet Service Provider</h2>
                <strong>{data?.isp}</strong>
            </div>
        </div>
        <Map data={data}/>

    </div>
    );
};