import { Link } from 'react-router-dom';
import data from '../api/event.json';
import { useState } from 'react';
import '../scss/eventList.scss';

export default function EventList(){
    const [sortBy, setSortBy] = useState('start');

    const list = data.sort(
        (a, b)=>{
            return a[sortBy]<b[sortBy]? 1 : -1;
        }
    )

    return(
        <div id="eventList">
            <div>
                <ul>
                    {
                        list.map(
                            (item) => (
                                <li key={item.slug}>
                                    <Link 
                                        to={`/event/${item.slug}`}
                                        data = {list}
                                    >
                                        <dl>
                                            <dt>{item.evId}</dt>
                                            <dd>{item.title}</dd>
                                            <dd>{item.start}</dd>
                                        </dl>
                                    </Link>
                                </li>
                            )
                        )
                    }
                    
                </ul>
            </div>
        </div>
    );
}