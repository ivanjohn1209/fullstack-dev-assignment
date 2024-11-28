export const fetchDomainData = async (domain: string, type: string) => {
    const response = await fetch(`https://radiant-empanada-c37ecf.netlify.app/api/domain/lookup?domain=${domain}&type=${type}`);
    if (!response.ok) throw new Error('Failed to fetch domain data');
    return response.json();
  };
  