import Web3 from 'web3';
import MetaContext from './MetaContext';

import React, { useCallback, useReducer, useEffect } from 'react'
import { reducer, initialState } from "./state";

function MetaProvider({ children }) {

    const [state, dispatch] = useReducer(reducer, initialState);

    const init = useCallback(
        async (sampleArtifact) => {
            if (sampleArtifact) {
                const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
                let accounts = null;
                if (localStorage.getItem('Address')) {
                    accounts = await web3.eth.requestAccounts();
                }

                const networkID = await web3.eth.net.getId();
                let { abi } = sampleArtifact;
                let sampleAddress, sampleContract;
                try {
                    sampleAddress = sampleArtifact.networks[networkID].address;
                    sampleContract = new web3.eth.Contract(abi, sampleAddress);
                } catch (error) {
                    console.log(error);
                }

                dispatch({
                    type: 'init',
                    data: {
                        sampleArtifact,
                        sampleContract,
                        sampleAddress,
                        web3, networkID, accounts
                    }
                })

            }
        }, [])

    useEffect(() => {
        const tryInit = async () => {
            try {
                const sampleArtifact = require('../contracts/sample.json');
                init(sampleArtifact);
            } catch (error) {
                console.log(error);
            }
        }
        tryInit();
    }, [init])

    useEffect(() => {
        const events = ["chainChanged", "accountsChanged"];
        const handleChange = () => {
            const accounts = null;
            localStorage.removeItem('Address');
            dispatch({
                type: 'logout',
                data: { accounts }
            })
            init(state.sampleArtifact);
        };

        events.forEach(e => { window.ethereum.on(e, handleChange) });
        return () => {
            events.forEach(e => window.ethereum.removeListener(e, handleChange));
        };
    }, [init, state.sampleArtifact]);

    const logIn = async () => {
        try {
            const accounts = await state.web3.eth.requestAccounts();
            localStorage.setItem('Address', accounts[0]);
            dispatch({
                type: 'login',
                data: { accounts }
            })
        } catch (error) {
            console.log(error);
        }

    }

    const logOut = async () => {
        try {
            const accounts = null;
            localStorage.removeItem('Address');
            dispatch({
                type: 'logout',
                data: { accounts }
            })
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <MetaContext.Provider value={{ state, dispatch, logIn, logOut }}>
            {children}
        </MetaContext.Provider>
    )
}

export default MetaProvider;