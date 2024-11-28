export const fetchDomainData = async (domain: string, type: string) => {
    const response = await fetch(`http://localhost:8080/api/domain/lookup?domain=${domain}&type=${type}`);
    if (!response.ok) throw new Error('Failed to fetch domain data');
    return response.json();
  };
  