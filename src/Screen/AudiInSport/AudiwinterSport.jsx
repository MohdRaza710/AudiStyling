import React from 'react'
import Image143 from '../../assets/image143.png'
import Image166 from '../../assets/image166.png'
import Image167 from '../../assets/image167.png'
import Image168 from '../../assets/image168.png'
import Image169 from '../../assets/image169.png'
import Image170 from '../../assets/image170.png'
import Image171 from '../../assets/image171.png'
import Image172 from '../../assets/image172.png'
import Image173 from '../../assets/image173.png'
import Image174 from '../../assets/image174.png'
import Image175 from '../../assets/image175.png'
import Video2 from '../../assets/video2.mp4'
import { Button, Pagination, Tabs } from 'antd'

function AudiwinterSport() {
    // const { TabPane } = Tabs;
    // const onChange = (key) => {
    //     scrollTo()
    // };

    const items = [
        {
            key: '1',
            label: 'Ski Federation FIS',


        },
        {
            key: '2',
            label: 'Hahnenkamm Races',


        },
        {
            key: '3',
            label: 'Aleksander Aamodit Kilde',


        }
    ]
    return (
        <div>
            <div>
                <img className='adws-image' src={Image143} alt="" />
            </div>

            <div className='adws-section'>
                <h1 className='adws-heading'>Audi and winter sports: an enduring partnership</h1>
                <p className='adws-description'>After almost four decades, AUDI AG is one of the longest-standing winter sports partners. Find out more about the company’s involvement with the International Ski Federation FIS, the national associations, the Hahnenkamm Races in Kitzbühel and the professional skier and brand ambassador Aleksander Aamodt Kilde.</p>
            </div>

            <div className='adws-section2'>
                <Tabs className='adws-tab1' items={items} />
            </div>

            <div className='adws-section3'>
                <p className='adws-description3'><b>Audi has been defining the appearance of the Alpine Ski World Cup’s international venues as partner of the International Ski Federation FIS since 2002.
                    In fact, Audi is one of the leading automotive brands involved in winter sports, above all as partner of the ski associations in winter sports nations such as Germany,
                    Austria and many more. Highlights include famous venues and spectacular races such as the Streif downhill course above Kitzbühel in Austria or the Lauberhorn downhill course in Wengen, Switzerland.</b></p>
            </div>

            <div className='adws-section4'>

                <div className='adws-card4'>
                    <img className='adws-image4' src={Image166} alt="" />
                    <span className='adws-description4'>Audi in winter sports</span>
                </div>

                <div className='adws-card4'>
                    <img className='adws-image4' src={Image167} alt="" />
                    <span className='adws-description4'>Audi in winter sports</span>
                </div>

                <div className='adws-card4'>
                    <img className='adws-image4' src={Image168} alt="" />
                    <span className='adws-description4'>Audi in winter sports</span>
                </div>

                <div className='adws-card4'>
                    <img className='adws-image4' src={Image169} alt="" />
                    <span className='adws-description4'>Audi in winter sports</span>
                </div>

                <div className='adws-pagdiv1'>
                    <Pagination className='adws-pagination1' defaultCurrent={1} total={40} align='end' />
                </div>
            </div>

            <div className='adws-section5'>
                <h2 className='adws-heading5'>Audi shapes the Alpine Ski World Cup</h2>
                <p className='adws-description5'>As long-standing partner of the International Ski Federation FIS, Audi defines the appearance of the international Alpine Ski World Cup venues.
                    Fans can see the Audi branding at the location, on TV and in the online media. In addition to its involvement in international alpine skiing,
                    Audi has extended its partnership with the German Ski Association (DSV), which was established in 1984.
                    Audi will be the team and automotive partner of the German national alpine skiing, ski cross and freeskiing teams over the next few years.</p>
            </div>

            <div className='adws-section6'>

                <div className='adws-card5'>
                    <img className='adws-image5' src={Image170} alt="" />
                    <span className='adws-description5'>Audi at the Ski World Cup</span>
                </div>

                <div className='adws-card5'>
                    <img className='adws-image5' src={Image171} alt="" />
                    <span className='adws-description5'>Audi at the Ski World Cup</span>
                </div>

                <div className='adws-card5'>
                    <img className='adws-image5' src={Image172} alt="" />
                    <span className='adws-description5'>Audi at the Ski World Cup</span>
                </div>

                <div className='adws-card5'>
                    <img className='adws-image5' src={Image173} alt="" />
                    <span className='adws-description5'>Audi at the Ski World Cup</span>
                </div>

                <div className='adws-pagdiv2'>
                    <Pagination className='adws-pagination2' defaultCurrent={1} total={40} />
                </div>
            </div>

            <div className='adws-section7'>
                <h2 className='adws-heading7'>Audi extends premium partnership with the Hahnenkamm Races in Kitzbühel</h2>
                <p className='adws-description6=7'>Audi has extended its successful partnership with the Hahnenkamm Races in Kitzbühel and can look back on more than 20 years of successful cooperation with the organiser and the town of Kitzbühel.</p>
                <p className='adws-description6=7.1'>The Hahnenkamm Races are the annual highlight of international winter sports and the alpine racing calendar. They take place every year in January in Kitzbühel, Austria.</p>
            </div>

            <div className='adws-section8'>
                <h2 className='adws-heading8'>Together for the sport and the fans</h2>
                <p className='adws-description8'>With its presence in the sport, Audi continues to clearly focus on the skiing experience for TV viewers and live spectators. The full-surface LED staging of the start house is an impressive example of how AUDI AG implements modern marketing concepts in 360-degree communication.</p>
            </div>

            <div className='adws-section9'>
                <video className='adws-video9' src={Video2}></video>
            </div>

            <div className='adws-section10'>
                <h2 className='adws-heading10'>Partnership between Aleksander Aamodt Kilde and AUDI AG</h2>
                <p className='adws-description10'>Aleksander Aamodt Kilde is regarded as one of the best and fastest skiers in the world. His greatest achievements to date include winning the World Cup overall title in the 2019/2020 season and winning the legendary Hahnenkamm Race in Kitzbühel in 2023.</p>
                <p className='adws-description10.1'>Kilde has been part of the Audi family for around a year as the car manufacturer’s official brand ambassador. Audi and Kilde share common values, such as the pursuit of progress and the aspiration to constantly improve and perform at the highest level.</p>
                <p className='adws-description10.2'>Passion for the sport, stamina and personal commitment to optimum performance and the achievement of goals make this partnership very special.</p>
            </div>

            <div className='adws-section11'>
                <img className='adws-image11' src={Image174} alt="" />
            </div>

            <div className='adws-section12'>
                <h2 className='adws-heading12'>You might also be interested in</h2>
                <img className='adws-image12' src={Image175} alt="" />
                <span className='adws-title12'>Audi and football: an electrifying partnership</span>
                <p className='adws-description12'>Audi and football: an electrifying partnership. How Audi provides fresh impetus and open up new horizons as a close partner and sponsor of regional, national and international sport for decades.</p>
                <Button className='adws-btn12'>Read more</Button>
            </div>
        </div>
    )
}

export default AudiwinterSport