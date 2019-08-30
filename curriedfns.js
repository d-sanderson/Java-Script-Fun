const createUrl = baseUrl => {
  const proto = "https";
  return path => {
    return `${proto}://${baseUrl}/${path}`;
  };
};

const createSiteUrl = createUrl('test.com');
const createSectionUrl = createSiteUrl('login')
console.log(createSectionUrl);