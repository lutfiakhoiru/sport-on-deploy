type TCardWithHEaderProps = {
    title:string,
    children:React.ReactNode;
}
const CardWithHeader=({title,children}:TCardWithHEaderProps)=>{
    return(
        <div className="bg-white" >
            <div className="px-5 py-5 boder-b border-gray-200">
                <h2 className="font-bold text-lg"> {title}</h2>
            </div>
            {children}
        </div>
    );
};

export default CardWithHeader;