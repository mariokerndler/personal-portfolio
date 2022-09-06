import content from '../json/data.json';

const Header = () => {
    return (
        <div className="text-center border-b border-slate-300 p-4 text-gray-500">
            <div className="text-2xl font-bold text-slate-700">{content.fullname}</div>
            <div className="">{content.job}</div>
            <div className="flex justify-center gap-2 text-sm">
                <div>E: {content.email}</div>
                <div>M: {content.phonenumber}</div>
            </div>
        </div> 
    );
};

export default Header;