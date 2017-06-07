import styled, { keyframes } from 'styled-components';

import * as animations from 'react-animations';

const frames = (name) => keyframes`
   ${animations[name]}
`;

const Animation = styled.div`
    animation: ${({name}) => frames(name)} ${({duration}) => duration? duration : "1s"} ${({timing}) => timing? timing : "ease"};
`;

export default Animation;
