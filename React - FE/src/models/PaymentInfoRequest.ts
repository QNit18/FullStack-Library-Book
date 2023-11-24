class PaymentInfoRequest {
    amount: number;
    currency: string;
    receiptEmail: string | undefined;

    constructor(amout: number, currency: string, receiptEmail: string | undefined) {
        this.amount = amout;
        this.currency = currency;
        this.receiptEmail = receiptEmail;
    }
}

export default PaymentInfoRequest;