import React, { Component } from 'react'
import Newsitem from './Newsitem.js';
import Spinner from './Spinner.js'; // Corrected import statement
export default class News extends Component {
  articles=[
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "benzinga.com",
    "title": "Former Tesla CEO Slams Elon Musk's Reported Decision To Scrap Cheaper Car Project: 'That's A Shame, They Might Want To Rethink'",
    "description": "In a recent turn of events, Martin Eberhard, co-founder and former CEO of Tesla Inc. TSLA, has voiced concerns regarding the company’s direction in the electric vehicle (EV) market, particularly its move away from developing affordable EV options. What Happen…",
    "url": "https://biztoc.com/x/d10111577fd88a0f",
    "urlToImage": "https://c.biztoc.com/p/d10111577fd88a0f/s.webp",
    "publishedAt": "2024-04-09T10:04:08Z",
    "content": "In a recent turn of events, Martin Eberhard, co-founder and former CEO of Tesla Inc. TSLA, has voiced concerns regarding the companys direction in the electric vehicle (EV) market, particularly its m… [+281 chars]"
    },
    {
      "source": {
      "id": null,
      "name": "Digital Journal"
      },
      "author": "AFP",
      "title": "Tesla settles wrongful death lawsuit from fatal crash",
      "description": "Tesla has settled with the family of an engineer killed when his Model X crashed in Silicon Valley six years ago, avoiding a trial, according to court filings Monday. A jury trial was to start next week in a wrongful death suit that accused Tesla of not livin…",
      "url": "https://www.digitaljournal.com/world/tesla-settles-wrongful-death-lawsuit-from-fatal-crash/article",
      "urlToImage": "https://www.digitaljournal.com/wp-content/uploads/2024/04/a3f4bc121ec7cf5564cb454449b3f0488242cb32.jpg",
      "publishedAt": "2024-04-09T00:40:00Z",
      "content": "By settling a lawsuit stemming from a Model X crash six years ago, Tesla avoids having the self-driving capabilities of its cars scrutinized in open court - Copyright AFP Olivier MORIN\r\nTesla has set… [+1513 chars]"
      },

    {
"source": {
"id": null,
"name": "Quartz India"
},
"author": "William Gavin",
"title": "Tesla has settled a lawsuit over an Apple engineer's fatal 2018 crash involving Autopilot",
"description": "Tesla has reached a settlement with the family of a driver who died in a 2018 crash involving the use of Tesla’s driver assistance program just days before a trial in California state court was set to kick into gear.Read more...",
"url": "https://qz.com/tesla-lawsuit-settled-fatal-autopilot-crash-elon-musk-1851396723",
"urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/04ecdb38e53b14d1ab8f256b01fdfa00.jpg",
"publishedAt": "2024-04-09T12:36:00Z",
"content": "Tesla has reached a settlement with the family of a driver who died in a 2018 crash involving the use of Teslas driver assistance program just days before a trial in California state court was set to… [+3170 chars]"
},
{
"source": {
"id": null,
"name": "Gizmodo.com"
},
"author": "Matt Novak",
"title": "Tesla Settles Lawsuit With Family of Apple Engineer Killed in 2018 Crash",
"description": "Tesla has settled a lawsuit with the surviving family members of an Apple engineer who died in a crash in 2018, according to a report from CNN. The engineer’s family blamed Tesla’s Autopilot technology for the deadly crash, a charge Tesla denied.Read more...",
"url": "https://gizmodo.com/tesla-settles-lawsuit-apple-engineer-killed-2018-crash-1851396252",
"urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/83f20b35f140fd507fc67bd88db702d6.png",
"publishedAt": "2024-04-09T12:30:00Z",
"content": "Tesla has settled a lawsuit with the surviving family members of an Apple engineer who died in a crash in 2018, according to a report from CNN. The engineers family blamed Teslas Autopilot technology… [+1601 chars]"
},
{
"source": {
"id": null,
"name": "WebProNews"
},
"author": "Rich Ord",
"title": "Tesla’s Ambitious Bet: A $10 Billion Investment in Full Self-Driving Technology",
"description": "WebProNews\nTesla’s Ambitious Bet: A $10 Billion Investment in Full Self-Driving Technology\nAccording to Musk, Tesla intends to allocate over $10 billion towards various aspects of its full self-driving initiative, including training, computational infrastruct…",
"url": "https://www.webpronews.com/teslas-ambitious-bet-a-10-billion-investment-in-full-self-driving-technology/",
"urlToImage": "https://www.webpronews.com/wp-content/uploads/2024/04/Screenshot-2024-04-09-at-8.27.39 AM.jpg",
"publishedAt": "2024-04-09T12:29:23Z",
"content": "In a stunning revelation that has sent shockwaves through the automotive industry, Tesla CEO Elon Musk has announced plans for the electric car manufacturer to invest billions of dollars in advancing… [+2623 chars]"
},
{
"source": {
"id": null,
"name": "Forbes"
},
"author": "Danielle Chemtob, Forbes Staff, \n Danielle Chemtob, Forbes Staff\n https://www.forbes.com/sites/daniellechemtob/",
"title": "Forbes Daily: What’s Behind Jamie Dimon’s Chilly Economic Outlook?",
"description": "Tuesday's edition of Forbes Daily covers Elon Musk's feud with Brazil, Trump social media's stock market slide, 30 Under 30 Europe list, Biden student debt relief and mroe.",
"url": "https://www.forbes.com/sites/daniellechemtob/2024/04/09/forbes-daily-whats-behind-jamie-dimons-chilly-economic-outlook/",
"urlToImage": "https://imageio.forbes.com/specials-images/imageserve/661533a946e19b7230abddd2/0x0.jpg?format=jpg&crop=2841,1598,x0,y36,safe&height=900&width=1600&fit=bounds",
"publishedAt": "2024-04-09T12:26:54Z",
"content": "This is a published version of the Forbes Daily newsletter, you can sign-up to get Forbes Daily in your inbox here.\r\nGood morning,\r\nWe may be living in the century of the super-commuter. The pandemic… [+9357 chars]"
}
    ]
  constructor(){
    super();
    console.log('this the constructor');
    this.state=
      {
        articles:this.articles,
        loading:true,
        page:1
        }
    
  }
   async componentDidMount(){
    let url=`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=API_KEY&pageSize=${this.props.pageSize}`;
    let data= await fetch(url);
    let parsedData=await data.json()
     this.setState({articles: parsedData.articles,totalResults: parsedData.totalResults})
  }
  handleprevClick = async (props) => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=API_KEY&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
        articles: parsedData.articles,
        page: this.state.page - 1,
        loading:false
    });
}

handleNextClick = async () => {
  if (!this.state.page + 1 > Math.ceil(this.state.totalResults /this.props.pageSize)) {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=API_KEY&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
      loading: false
    });
  }
}



  render(){
    return (
      <div className='container my-3'> 
      <p>Monkey news-Headlines</p>
      <Spinner/>
      <div className='row'>
      {!this.state.loading && this.state.articles.map((element)=>{
        return <div className='col-md-4' key={element.url}>
        <Newsitem title={element.title?element.title:" "} description={element.description?element.description:" "} imageurl={element.urlToImage} newsurl={element.url}/>
      </div>
      })}
    </div>
    <div className="d-flex justify-content-between">
    <button disabled={this.state.page<=1} type="button" className="btn btn-primary" onClick={this.handleprevClick}>Privious &#8249;</button>
<button  disabled={(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))}type="button" className="btn btn-secondary" onClick={this.handleNextClick}>next &#8250;</button>
    </div>
    </div>
    )
  }
  }