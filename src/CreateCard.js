import React, {useState} from 'react';
import {Card} from 'react-bootstrap';

const CreateCard = (props) => {

    const [cardInfo, setCardInfo] = useState(false);
    const [showMap, setShowMap] = useState(false);
    const [CardShow, setCardShow] = useState(false);
   
  return (
    <>
      {
       cardInfo ?
       <div className='card-info'>
           <img src={props.cont.flags.png} alt="" />
           <div className="main-info">
           <div className="country-info-left">
            <h4> Country name : <span>{props.cont.name.common}</span>  </h4>
            <h4> Capital : <span>{props.cont.capital}</span>  </h4>
            <h4> Continents/Region : <span>{props.cont.continents}</span>  </h4>
            {/* <h4> Currencies : {Object.values(props.cont.currencies.LYD)} </h4> */}
            <h4> Languages : <span>{Object.values(props.cont.languages)}</span>  </h4>
            <h4> Timezones : <span>{props.cont.timezones}</span>  </h4>
        
            <button className='map-btn'onClick={() => {setShowMap(!showMap)}}>
                {
                    !showMap ? 'show in maps' : 'close maps'
                }</button>
         

           <button className='back-btn' 
           onClick={ () => {
               setCardInfo(!cardInfo)
               setCardShow(false)
               setShowMap(false)
               }}>back</button>
               </div>

               <div className="country-info-right">
                   <h3>Borders Countries</h3>
                   <div className="borders">
                   
                      {
                          props.cont.borders.map((neben) => {
                         
                             return <div className="neben"
                             onClick={ () => {props.input(neben)}}
                             > {neben} </div>
                            
                            
                          })
                            
                          
                      }
                          {
                            showMap &&
                                <iframe className='iframe' src={props.cont.maps.openStreetMaps} ></iframe>
                          }
                   </div>
               </div>
               </div>
       </div>
       :
       null
   }

    <Card key={props.key} style={{ width: '15rem' }} className="card"
    onClick={() => {
        setCardInfo(true)
        }}>

    <Card.Img variant="top" key={props.key} src={props.cont.flags.png} />
    <Card.Body key={props.key}>
      <Card.Title key={props.key}>
       
        <h1>
          {props.cont.altSpellings.map((title, index) => {
            return (
              <>
                <h6 key={index}> {title} </h6>
              </>
            );
          })}
        </h1>
      </Card.Title>
    </Card.Body>
    {
        CardShow ?
        <button 
        onClick={ () => {
            props.input('all')
        }}>zukzk</button> 
        :
        null
    }
     
  </Card>
  </>
  )
};

export default CreateCard;
