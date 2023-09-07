import React from 'react'

function Search() {
  return (
    <div className="search">
      <div className="searchForm">
        <input
          type="text"
          placeholder="Find a user"
        />
      </div>
        <div className="userChat">
          <img src='' alt="" />
          <div className="userChatInfo">
            <span>abcd</span>
          </div>
        </div>
    </div>
  )
}

export default Search