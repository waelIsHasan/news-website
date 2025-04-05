import './ArticleCard.css'
export default function ArticleCard({isVertical , title , author , date , img}) {
  let className = 'article-card';
  let classNameParg = 'inactive'
  if(isVertical){
    className ='article-card-column';
    classNameParg = 'active'
  }


  return (
    <div className={className}>
      <img src={img} alt="" />
      <div className="ar-card-info">
        <p>{title}</p>
        <p className={`${classNameParg}`}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor maxime commodi beatae asperiores, a illum, nemo dicta ducimus, optio reiciendis necessitatibus saepe dolorum eos quia laborum? Deserunt veniam voluptas reiciendis.
        </p>
        <div className="author-date">
          <h4>{author}</h4>
          <h5>{date}</h5>
        </div>
      </div>
    </div>
  );
}
