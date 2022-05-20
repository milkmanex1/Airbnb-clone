import React from 'react';
import './Home.css'
import Banner from './Banner'
import Card from './Card';

function Home() {
    return <div className='home'>
        <Banner></Banner>

        <div className="card-container-container">
            <div className="card-container">
                <Card src="https://a0.muscache.com/im/pictures/4bdcf353-a42b-421a-b013-a2ba3ee1925f.jpg?im_w=1200" title="Entire Homes" desc="Comfortable private places, with room for friends or family" />
                <Card src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-16123764/original/388eb141-3810-4b7c-b97a-adf5bd4ce000.jpeg?im_w=1200" title="Unique Stays" desc="Spaces that are more than just a place to sleep" />
                <Card src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/6c9a9a99-9c38-417e-a7f5-a45ede9b3407-1532627926.jpg?crop=1.00xw:0.753xh;0,0.227xh&resize=980:*" title="Online Experiences" desc="Unique activities, we can so together, led by a world of hosts" />
                <Card src="https://hips.hearstapps.com/harpersbazaaruk.cdnds.net/16/27/1467886818-original-the-seashell-house-casa-caracol-jpg-c8176b4e.jpg" title="3 Bedroom Flat in DarthMouth" desc="Enjoy the best of Darthmouth with this amazing place" price="$350/night" />
                <Card src="https://media.timeout.com/images/103667573/750/422/image.jpg" title="Penthouse in London" desc="Enjoy the amazing sights of London with this stunning penthouse" price="$700/night" />
                <Card src="https://i.insider.com/57a0f8340aec954f798b48d0?width=700" title="Forest Lust" desc="Awaken your inner Tarzen or Jane with this private sanctuary" price="$80/night" />
            </div>
        </div>

    </div>;
}

export default Home;
