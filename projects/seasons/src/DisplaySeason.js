import React from "react";
import './DisplaySeason.css';

// Introducing summer/ winter elements for text and symbol to replace more complex logic.
const seasonConfig = {
  summer : {
    text : 'Lets have a BBQ',
    iconName : 'sun'
  },
  winter : {
    text : 'Its really cold out',
    iconName : 'snowflake'
  },
}

const getSeason = (lat, month) => {
  // Comditional statement to create hard break in seasons.
  // Ternary expression to handle scenarios of northern vs southern hemisphere (>0).
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer'
  }
}

const Season = props => {
  const season = getSeason(
    props.lat, 
    new Date().getMonth()
    )
    // Below uses ES6 syntax for deconstructed objects.  Pulls names of variables that are found in object.
    const { text, iconName } = seasonConfig[season]
    
  // Replaced logic below with config variable above.
  // icon is result of seaon (if winter its snowflake...otherwise its sun)
  // const icon = season === 'winter' ? 'snowflake' : 'sun';
  // // text is result of season determination
  // const text = season === 'winter' ? 'Its really cold out' : 'Lets have a BBQ'

  // Return statements includes icon refernce that follows name of "icon" icon in i tag
  // Addin component name to tag that uses interpolation.
  return (
  <div className={`season-display ${season}`}> 
    <i className={`icon-left massive ${iconName} icon`} />
    <h1>{text}</h1>
    <i className={`icon-right massive ${iconName} icon`} />
  </div>
  );
}

export default Season
