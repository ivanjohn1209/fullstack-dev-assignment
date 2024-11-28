const { default: axios } = require("axios");

exports.lookupDomain = async (req, res) => {
    const { domain, type } = req.query;
    console.log(process.env.WHOIS_API_KEY)

    if (!domain || !type) {
      return res.status(400).json({ error: 'Please provide a domain and type (domain or contact).' });
    }
    try {

        const apiUrl = `https://www.whoisxmlapi.com/whoisserver/WhoisService`;
      const response = await axios.get(apiUrl, {
        params: {
          apiKey: process.env.WHOIS_API_KEY,
          domainName: domain,
          outputFormat: 'JSON',
        },
      });
  
      const data = response.data.WhoisRecord;
      let result;
      if (type === 'domain') {
        result = {
          'Domain Name': data.domainName || 'N/A',
          'Registrar': data.registrarName || 'N/A',
          'Registration Date': formatDate(data.registryData?.createdDate) || 'N/A',
          'Expiration Date': formatDate(data.registryData?.expiresDate) || 'N/A',
          'Estimated Domain Age': data.estimatedDomainAge || 'N/A',
          'Hostnames    ': formatHostnames(data.nameServers?.hostNames || []),
        };
      } else if (type === 'contact') {
        result = {
          'Registrant Name': data.registrant?.organization || 'N/A',
          'Technical Contact Name': data.technicalContact?.organization || 'N/A',
          'Administrative Contact Name': data.administrativeContact?.organization || 'N/A',
          'Contact Email': data.contactEmail || 'N/A',
        };
      } else {
        return res.status(400).json({ error: 'Invalid type. Use "domain" or "contact".' });
      }
  
      res.json(result);
    } catch (error) {
      console.error('Error fetching domain data:', error.message);
      res.status(500).json({ error: 'Failed to fetch domain data.' });
    }
  
}


const formatHostnames = (hosts) => {
    const hostnames = hosts.join(', ');
    return hostnames.length > 25 ? hostnames.substring(0, 25) + '...' : hostnames;
  };
  const formatDate = (value) => {
    const date = new Date(value);
    if (!isNaN(date.getTime())) {
      // Format date as 'Month Day, Year' (e.g., Jan 1, 2024)
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      });
    }
    return value; // Return the value as is if it's not a valid date
  };
