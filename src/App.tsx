import "./App.css";
import { TonConnectButton } from "@tonconnect/ui-react";
import { Counter } from "./components/Counter";
import { Jetton } from "./components/Jetton";
import { TransferTon } from "./components/TransferTon";
import styled from "styled-components";
import { Button, FlexBoxCol, FlexBoxRow } from "./components/styled/styled";
import { useTonConnect } from "./hooks/useTonConnect";
import { CHAIN } from "@tonconnect/protocol";
import "@twa-dev/sdk";


// Soft Cream (Background/Main Area): #F8F1E7 – A warm, soft cream that provides a welcoming and open space.
// Muted Sage Green (Accent/Details): #A8B6A7 – Adds a natural and trustworthy feel without overwhelming the user.
// Light Coral (Buttons/Highlights): #FFC1A1 – A gentle touch of coral to draw attention without being aggressive.
// Sky Blue (Headers/Sections): #B5D4E7 – Calm and airy, perfect for accentuating sections like headers or cards.
// Stone Grey (Text/Icons): #5A5A5A – Neutral grey that balances the lighter colors and ensures readability.
// Warm Beige (Navigation/Sidebar): #D9C8B2 – Soft and subtle for secondary areas that should still feel connected to the overall theme.

const StyledApp = styled.div`
  background-color: #F8F1E7;
  color: black;

  @media (prefers-color-scheme: dark) {
    background-color: #5A5A5A;
    color: #F8F1E7;
  }
  min-height: 100vh;
  padding: 20px 20px;
`;

const AppContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

function App() {
  const { network } = useTonConnect();

  return (
    <StyledApp>
      <AppContainer>
        <FlexBoxCol>
        <FlexBoxRow>
          <h1>Real Estate & Pirates</h1>
        </FlexBoxRow>
          <FlexBoxRow>
            <TonConnectButton />
            <Button>
              {network
                ? network === CHAIN.MAINNET
                  ? "mainnet"
                  : "testnet"
                : "N/A"}
            </Button>
          </FlexBoxRow>
          <Counter />
          <TransferTon />
          <Jetton />
        </FlexBoxCol>
      </AppContainer>
    </StyledApp>
  );
}

export default App;
