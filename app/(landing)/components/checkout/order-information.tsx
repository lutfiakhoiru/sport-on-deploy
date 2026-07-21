import CardWithHeader from "../ui/card-with-header";

const OrderInformation = () => {
    return (
        <CardWithHeader title="Order Information">
            <div className="p-5">
                <div className="input-group">
                    <label htmlFor="full_name">Nama Lengkap</label>
                    <input type="text" placeholder="type your full name" id="full_name" />
                </div>
                <div className="input-group">
                    <label htmlFor="wa_number">No. WhatsApp</label>
                    <input type="number" placeholder="type your No WhatsApp" id="wa_number" />
                </div>
                <div className="input-group">
                    <label htmlFor="alamat">Alamat</label>
                    <textarea placeholder="type your address" id="alamat" rows={7}/>
                </div>
            </div>
        </CardWithHeader>
    )
};
  

export default OrderInformation;