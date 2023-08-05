import { useParams } from "react-router";
import eventData from '../api/event.json';
import { useState } from "react";

export default function Event(){
    const {slug} = useParams();
    const [sortBy, setSortBy] = useState('start');
    const list = eventData.sort(
        (a, b)=>{
            return a[sortBy]>b[sortBy]? 1 : -1;
        }
    )
    return(
        <div id="event">
            <div>
                <h3>
                    {eventData[slug].title}
                </h3>
                <div>
                    <img src={eventData[slug].photo} alt="photo" />
                </div>
                <p>{eventData[slug].detail}</p>
            </div>
        </div>
    );
}