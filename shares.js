const awards = [
    {
      name: 'James Peebles',
      category: 'Physics',
      research: 'Theoretical discoveries in physical cosmology',
      year: 2019,
    },
    {
      name: 'Michel Mayor',
      category: 'Physics',
      research: 'Discovery of an exoplanet orbiting a solar-type star',
      year: 2019,
    },
    {
      name: 'Didier Queloz',
      category: 'Physics',
      research: 'Discovery of an exoplanet orbiting a solar-type star',
      year: 2019,
    },
    {
      name: 'John B. Goodenough',
      category: 'Chemistry',
      research: 'Development of lithium-ion batteries',
      year: 2019,
    },
    {
      name: 'M. Stanley Whittingham',
      category: 'Chemistry',
      research: 'Development of lithium-ion batteries',
      year: 2019,
    },
    {
      name: 'Akira Yoshino',
      category: 'Chemistry',
      research: 'Development of lithium-ion batteries',
      year: 2019,
    },
    {
      name: 'Arthur Ashkin',
      category: 'Physics',
      research: 'Optical tweezers and their application to biological systems',
      year: 2018,
    },
    {
      name: 'Gerard Mourou',
      category: 'Physics',
      research: 'Method of generating high-intensity, ultra-short optical pulses',
      year: 2018,
    },
    {
      name: 'Donna Strickland',
      category: 'Physics',
      research: 'Method of generating high-intensity, ultra-short optical pulses',
      year: 2018,
    },
    {
      name: 'Frances H. Arnold',
      category: 'Chemistry',
      research: 'Directed evolution of enzymes',
      year: 2018,
    },
    {
      name: 'George P. Smith',
      category: 'Chemistry',
      research: 'Phage display of peptides and antibodies.',
      year: 2018,
    },
    {
      name: 'Sir Gregory P. Winter',
      category: 'Chemistry',
      research: 'Phage display of peptides and antibodies.',
      year: 2018,
    },
  ];
  
  function calculateShares(awards) {
    const categorizedAwards = {};
  
    // Categorize the awards by year and category
    awards.forEach((award) => {
      const key = `${award.category}-${award.year}`;
      if (!categorizedAwards[key]) {
        categorizedAwards[key] = {
          category: award.category,
          year: award.year,
          winners: [],
        };
      }
      categorizedAwards[key].winners.push(award);
    });
  
    // Calculate the share for each winner in each category-year
    const prizes = Object.values(categorizedAwards).map((categoryYear) => {
      const totalWinners = categoryYear.winners.length;
      const shareValue = 1 / totalWinners;
  
      const winnersWithShares = categoryYear.winners.map((winner) => ({
        name: winner.name,
        share: shareValue,
      }));
  
      return {
        category: categoryYear.category,
        year: categoryYear.year,
        winners: winnersWithShares,
      };
    });
  
    return prizes;
  }
  
  const calculatedShares = calculateShares(awards);
  console.log(calculatedShares);
  