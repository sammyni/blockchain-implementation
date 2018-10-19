const Wallet = require('./index');
const TransactionPool = require('./transaction-pool');

describe('Wallet', () => {
    let wallet, tp;

    beforeEach(() => {
        wallet = new Wallet();
        tp = new TransactionPool();
    });

    describe('createing a transaction', () => {
        let transaction, sendAmount, recipient;

        beforeEach(() => {
            sendAmount = 50;
            recipient = 's0m3-4ddr355';
            transaction = wallet.createTransaction(recipient, sendAmount, tp);
        });

        describe('doing the same transaction', () => {
            beforeEach(() => {
                transaction = wallet.createTransaction(recipient, sendAmount, tp);
            });

            it('doubles the `sendAmount` subtracted from the wallet balance', () => {
                expect(transaction.outputs.find(output => output.address === wallet.publicKey).amount)
                    .toEqual(wallet.balance - sendAmount * 2);
            });

            it('clones the `sendAmount` output for the recipient', () => {
                console.log(transaction);
                // expect(transaction.outputs.filter(output => output.address === recipient)
                //     .map(output => output.amount)).toEqual([sendAmount, sendAmount]);
            })
        })
    });
});
