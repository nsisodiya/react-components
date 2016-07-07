import {Icon, PropTypesTable} from "@hotelsoft/react-components";
import Highlight from "react-syntax-highlight";

export default function () {
  return <span>
           <Highlight lang={'html'} value={'<Icon icon="plus"/>'}/>
           <Icon icon="plus"/>
           <PropTypesTable comp={Icon} />
         </span>;
}
