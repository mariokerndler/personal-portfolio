import content from '../json/data.json';

const Profile = () => {
    return (
        <div>
          <div className="text-2xl font-bold text-indigo-600">{content.index.title}</div>
          <div dangerouslySetInnerHTML={{__html: content.index.content}}></div>
        </div> 
    );
};

export default Profile;