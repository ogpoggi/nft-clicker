import uuid from 'uuid/v4'

const producers = [
    {
        id: uuid(),
        name: 'Cursor',
        price: 30,
        nftPerSeconds: 1,
        purchased: 0
    },
    {
        id: uuid(),
        name: 'Grandma',
        price: 100,
        nftPerSeconds: 5,
        purchased: 0
    },
    {
        id: uuid(),
        name: 'NFT Farm',
        price: 500,
        nftPerSeconds: 20,
        purchased: 0
    },
    {
        id: uuid(),
        name: 'NFT Tree',
        price: 1500,
        nftPerSeconds: 100,
        purchased: 0
    },
    {
        id: uuid(),
        name: 'NFT Factory',
        price: 3000,
        nftPerSeconds: 250,
        purchased: 0
    },
    {
        id: uuid(),
        name: 'NFT Mine',
        price: 7000,
        nftPerSeconds: 600,
        purchased: 0
    },
    {
        id: uuid(),
        name: 'NFT Lab',
        price: 10000,
        nftPerSeconds: 900,
        purchased: 0
    },
    {
        id: uuid(),
        name: 'NFT Time Machine',
        price: 20000,
        nftPerSeconds: 1900,
        purchased: 0
    },
    {
        id: uuid(),
        name: 'NFT World',
        price: 999999999999,
        nftPerSeconds: 9999999999999999999,
        purchased: 0
    }
]

export default producers
