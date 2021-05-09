const helper = require('./../helper/helper.js');

const downgrade = (csrf) => {
  helper.sendAjax('POST', '/premium', { upgrade: false, _csrf: csrf }, () => {
    setup(csrf);
    helper.fetchAccount((account) => console.log(account));
  });
};

const upgrade = (csrf) => {
  helper.sendAjax('POST', '/premium', { upgrade: true, _csrf: csrf }, (account) => {
    setup(csrf);
    console.log(account);
    helper.fetchAccount((account) => console.log(account));
  });
}

const PremiumOffers = (props) => {
  const user = props.user;
  console.log(user);
  const freeSec = (
    <div id="free">
      <h3>Free</h3>
      <p>Yup, this is the free tier. You get all base functionality, plus some ads for your enjoyment :)</p>
      {user.premium ? <button id="freeSubmit" onClick={(e) => {downgrade(props.csrf)}}>Downgrade</button> : <button id="freeSubmit" onClick={(e) => {downgrade(props.csrf)}} disabled={true}>Currently activated!</button>}
    </div>
  );
  const premiumSec = (
      <div id="premium">
        <h3>Premium</h3>
        <p>Here's the premium plan that costs.... nothing. :) Just click the button.</p>
        {user.premium ? <button id="premiumSubmit" onClick={(e) => {upgrade(props.csrf)}} disabled={true}>Currently activated!</button> : <button id="premiumSubmit" onClick={(e) => {upgrade(props.csrf)}}>Upgrade</button>}
      </div>
  );
  return (
    <div id="offersWrapper">
      <h2>Wow! Look at all of your plans! Pick your favorite:</h2>
      <div id="offers">
        {freeSec}
        {premiumSec}
      </div>
    </div>
  );
}

const setup = (csrf) => {
  helper.fetchAccount((data) => {
    ReactDOM.render(<PremiumOffers user={data.account} csrf={csrf} />, document.querySelector('#content'));
  });
};

const getToken = () => {
  helper.sendAjax('GET', '/getToken', null, (result) => {
    setup(result.csrfToken);
  });
};

$(() => {
  getToken();
});