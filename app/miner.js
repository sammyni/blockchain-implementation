class Miner {
    constructor( blockchain, TransactionPool, wallet, p2pServer ) {
        this.blockchain = blockchain;
        this.transactionPool = transactionPool;
        this.wallet = wallet;
        this.p2p2pServer = p2p2pServer;
    }

    mine() {
        //Fetch valid transactions from the transaction pool
        const validTransactions = this.transactionPool.validTransactions();
        //include a reward for the miner
        //create a block consisting of the valid transactions
        //sychronize the chains in the peer-to-perr server
        //clear the transaction pool
        // broadcast to every miner to clear their transaction pools
    }
}


module.exports = Miner;
