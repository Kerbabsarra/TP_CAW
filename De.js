import one from './one.png';
import two from './two.png';
import three from './three.png';
import four from './four.png';
import five from './five.png';
import six from './six.png';

const De = (props) => {
    const des= [ one,two,three,four,five,six];
    return ( 
        <div className='de-element'>
      <img src={des[props.number]} alt="first card " />

        </div>
     );
}
 
export default De;