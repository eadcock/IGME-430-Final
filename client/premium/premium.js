const PremiumOffers = () => {
  return (
    <>
      <h2>Wow! Look at all of your plans! Pick your favorite:</h2>
      <div id="free">
        <h3>Free</h3>
        <p>Yup, this is the free tier. You get all base functionality, plus some ads for your enjoyment :)</p>
      </div>
      <div id="premium">
        <h3>Premium</h3>
        <p>Here's the premium plan that costs.... nothing. :) Just click the button.</p>
      </div>
    </>
  );
}

const setup = (csrf) => {
  
};

const getToken = () => {
  helper.sendAjax('GET', '/getToken', null, (result) => {
    setup(result.csrfToken);
  });
};

$(() => {
  getToken();
});