const createUrl = baseUrl => {
  const proto = "https";
  return path => {
    return `${proto}://${baseUrl}/${path}`;
  };
};

//  This returns a function with the baseURL argument passed
const createSiteUrl = createUrl('test.com');

// You now use the createSiteUrl fn to set the path.
const createSectionUrl = createSiteUrl('login')
console.log(createSectionUrl);