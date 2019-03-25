import React, { PureComponent } from 'react';
import IosPerson from 'react-ionicons/lib/IosPerson'
import IosThumbsUp from 'react-ionicons/lib/IosThumbsUp'
import IosThumbsDown from 'react-ionicons/lib/IosThumbsDown'

class MomentosPDI extends PureComponent {
  render () {
    return(
      <div>
        {mData.map((item)=>{
          return(
            <div>
              <div style={{height: 150, width: '100%'}}>
                <img style={{position: 'absolute', height: 150, width: '100%', objectFit: 'cover'}} src={item.image}/>
                <div style={{
                  display: 'flex', 
                  position: 'absolute', 
                  alignItems: 'center' 
                }}>
                  <div 
                    style={{
                      display: 'flex',
                      borderRadius: 35, 
                      backgroundColor: "#4B98F4", 
                      height: 30, 
                      width: 30, 
                      justifyContent: 'center', 
                      alignItems: 'center',
                      margin: 10
                      }}>
                    <IosPerson color={'white'} size={20}/>
                  </div>
                  <p style={{color: '#4B98F4'}}>@{item.user}</p>
                </div>
                <div style={{
                  display: 'flex', 
                  width: '100%', 
                  height: 150, 
                  position: 'absolute', 
                  alignItems: 'flex-end',
                  justifyContent: 'flex-end',
                  paddingRight: 10,
                  paddingBottom: 10
                  }}>
                  <div style={{
                    display: 'flex', 
                    marginRight: 5, 
                  }}>
                    <IosThumbsUp color={"#4B98F4"}/>
                    <p style={{fontSize: 8, color: "#4B98F4", marginTop: 5}}>{item.likes}</p>
                  </div>
                  <div style={{display: 'flex'}}>
                    <IosThumbsDown color={"#EB4826"}/>
                    <p style={{fontSize: 8, color: "#EB4826", marginTop: 5}}>{item.likes}</p>
                  </div>
                </div>
              </div>
              <div style={{minHeight: 30, backgroundColor: '#C3DFFA', padding: 10}}>
                <p>
                  {item.coment}
                </p>
              </div>
            </div>
          )
          })
        }
      </div>
    )
  }
}

export default MomentosPDI;

const mData = [
  {
    image: 'https://www.enterwine.com/media/catalog/product/cache/1/thumbnail/700x/17f82f742ffe127f42dca9de82fb58b1/b/a/barcelo-imperial.jpg',
    likes: 20,
    dislikes: 2,
    coment: 'hello ma man lorem isps da asdasd aspdij askdnalknio sa iasdoiijasd',
    user: 'jone'
  },
  {
    image: 'https://www.enterwine.com/media/catalog/product/cache/1/thumbnail/700x/17f82f742ffe127f42dca9de82fb58b1/b/a/barcelo-imperial.jpg',
    likes: 20,
    dislikes: 2,
    coment: 'hello ma man lorem askdnalknio sa iasdoiijasd',
    user: 'jone'
  },
  {
    image: 'https://www.enterwine.com/media/catalog/product/cache/1/thumbnail/700x/17f82f742ffe127f42dca9de82fb58b1/b/a/barcelo-imperial.jpg',
    likes: 20,
    dislikes: 2,
    coment: 'hello ma asdoiijasd',
    user: 'jone'
  },
  {
    image: 'https://www.enterwine.com/media/catalog/product/cache/1/thumbnail/700x/17f82f742ffe127f42dca9de82fb58b1/b/a/barcelo-imperial.jpg',
    likes: 20,
    dislikes: 2,
    coment: 'hello ma man askdnalknio sa iasdoiijasd',
    user: 'jone'
  },
  {
    image: 'https://www.enterwine.com/media/catalog/product/cache/1/thumbnail/700x/17f82f742ffe127f42dca9de82fb58b1/b/a/barcelo-imperial.jpg',
    likes: 20,
    dislikes: 2,
    coment: 'hello ma man lorem isps da asdasd aspdij askdnalknio sa iasdoiijasd',
    user: 'jone'
  }
]