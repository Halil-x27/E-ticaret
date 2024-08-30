import CampaignsItem from "./CampaignsItem"

const  Campaigns = () => {
  return (
    <section class="campaigns">
    <div class="container">
      <div class="campaigns-wrapper">
       <CampaignsItem/>
       <CampaignsItem/>
        
      </div>
      <div class="campaigns-wrapper">
      <CampaignsItem/>
       <CampaignsItem/>
       
      </div>
    </div>
  </section>

  )
  
}

export default Campaigns