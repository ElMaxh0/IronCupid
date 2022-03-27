import React from "react"
import { useBackground } from "../hooks/background"
import { useContent } from "../hooks/contentid"
import { Bot } from "../components/chat"
import { PeopleData } from "../components/infos/peopleinfo"
import { Cards } from "../components/card/card"
import { LastContacts } from "../components/contacts"
import { AccountInfo } from "../components/accounts/account"
function LoadContent(cnt){
    const {bgid, setbgid} =useBackground()
    const {content, setContent} =useContent()
    console.log(content)
    switch(content){
        case 1:
            var r =<LastContacts />
            break;
        case 2:
            var r =<Bot />
            break;
        case 3:
            var r =<AccountInfo />
            break;
        default:
            var r =<PeopleData />
            break;
            
    }
    return r
}
export{
    LoadContent,
}