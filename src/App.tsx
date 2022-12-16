import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  margin: 0;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  background-color: yellow;
`;
const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 150px;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Circle = styled(motion.div)`
  background-color: rgb(255, 255, 255);
  height: 30px;
  width: 30px;
  border-radius: 30px;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  justify-content: center;
  align-items: center;
`;
const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0, 0.5);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Button = styled(motion.button)`
  width: 80px;
  height: 30px;
  background-color: rgb(255, 255, 255);
  border: none;
  border-radius: 2px;
  margin-top: 10px;
  align-items: center;
  font-size: 15px;
  font-weight: bold;
  color: #3659e6;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const buttonVariants = {
  initial: { color: '#3659e6' },
  hover: { scale: 1.2, color: '#fd0d0d' },
  tab: { scale: 1.2, color: '#fd850d' },
};

function App() {
  const [clicked, setClicked] = useState(false);
  const [id, setId] = useState<null | string>(null);
  const toggleSwitchBtn = () => setClicked((prev) => !prev);
  return (
    <Wrapper>
      <Grid>
        <Box
          whileHover={{
            scaleX: 1.15,
            scaleY: 1.2,
          }}
          style={{ transformOrigin: 'bottom right' }}
          onClick={() => setId('1')}
          key={'1'}
          layoutId={'1'}
        />
        <Box onClick={() => setId('2')} key={'2'} layoutId={'2'}>
          {clicked ? <Circle layoutId="circle" /> : null}
        </Box>
        <Box onClick={() => setId('3')} key={'3'} layoutId={'3'}>
          {clicked ? null : <Circle layoutId="circle" />}
        </Box>
        <Box
          whileHover={{ scaleX: 1.15, scaleY: 1.2, originX: 0, originY: 0 }}
          onClick={() => setId('4')}
          key={'4'}
          layoutId={'4'}
        />
      </Grid>
      {id ? (
        <Overlay
          initial={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
          animate={{ backgroundColor: 'rgba(0,0,0, 0.7)' }}
          exit={{ backgroundColor: 'rgba(0,0,0, 0)' }}
          onClick={() => setId(null)}
        >
          <Box
            layoutId={id}
            style={{
              width: 400,
              height: 200,
              backgroundColor: 'rgba(255,255,255,0.9)',
            }}
          />
        </Overlay>
      ) : null}
      <Button
        variants={buttonVariants}
        initial
        whileHover="hover"
        whileTap="tab"
        onClick={toggleSwitchBtn}
      >
        Switch
      </Button>
    </Wrapper>
  );
}
export default App;
//https://codesandbox.io/s/dazzling-goldwasser-lqwjk9?file=/src/App.tsx
