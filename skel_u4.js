SKEL["4.1"] = {
  q: "Why did a rich country with a broke government end up with a revolution in 1789?",
  setup: [
    "France's debt from the Seven Years' War and the American Revolution eats over half the budget by 1789.",
    "The debt isn't huge; the real problem is that nobles and clergy are mostly exempt from taxes.",
    "The parlements (noble courts) use Enlightenment language to block royal reform."
  ],
  turns: [
    ["1774", "Louis XVI restores the parlements", "Louis brings back the noble courts his grandfather's chancellor Maupeou had abolished.", "Gives nobles back their tool for blocking reform."],
    ["1781", "Necker's report on royal finances", "Necker claims a surplus by leaving out war costs, and reveals big court pensions.", "Makes new taxes harder to justify."],
    ["1787", "Assembly of Notables meets", "Hand-picked nobles and clergy reject Calonne's land tax and say only the Estates General can approve taxes.", "Nobles try to gain power at the king's expense and force the Estates General."],
    ["1788", "Doubling the Third", "The Third Estate gets twice as many deputies, but voting by order or by head is undecided.", "Voting by head would let the Third Estate win; the fight over it becomes the crisis."],
    ["1789", "National Assembly declared", "On June 17 the Third Estate declares itself the National Assembly.", "Claims sovereignty for the nation, not the king."],
    ["1789", "Tennis Court Oath", "Locked out, deputies swear not to separate until France has a constitution.", "Louis gives in on June 27 and orders the other estates to join."]
  ],
  people: [
    ["Louis XVI", "King of France", "Restored the parlements, called the Estates General, and kept backing down.", "His weakness let the crisis become a revolution.", ["Marie Antoinette", "Jacques Necker"]],
    ["Marie Antoinette", "Queen of France", "Austrian-born queen, attacked in pamphlets for extravagance.", "Symbol of the monarchy's lost moral authority.", ["Louis XVI"]],
    ["Jacques Necker", "Finance director", "Published the misleading 1781 report; returned in 1788.", "Popular, but his report made reform harder.", ["Charles Alexandre de Calonne"]],
    ["Charles Alexandre de Calonne", "Finance minister", "Proposed a land tax on everyone regardless of status (1786).", "Its rejection forced the Estates General.", ["Jacques Necker"]],
    ["Abbé Sieyès", "Clergyman and pamphleteer", "Wrote What Is the Third Estate?", "Argued the Third Estate was the nation.", []]
  ],
  results: [
    "The Third Estate, led by lawyers and professionals, takes control of the Estates General.",
    "The king can now only govern with the National Constituent Assembly.",
    "Bad harvests and soaring bread prices (1788) add hunger and anger."
  ],
  before: "Acts 3.1 and 3.6: Louis XIV's debts, the restored parlements, and the cost of helping America; Act 3.5: Enlightenment ideas.",
  after: "Act 4.2: Paris crowds and peasants push the revolution further, starting with the Bastille.",
  takeaway: "France couldn't tax its privileged classes, nobles blocked reform to gain power, and the Estates General they forced turned into the Third Estate's National Assembly."
};

SKEL["4.2"] = {
  q: "How did Paris crowds and peasants push the revolution past what the Assembly planned, and how did the Assembly rebuild France?",
  setup: [
    "Bad harvests and the highest bread prices since 1703 make people desperate.",
    "The National Assembly wants a constitutional monarchy, but Louis keeps resisting.",
    "Enlightenment ideas of rights and popular sovereignty guide the deputies."
  ],
  turns: [
    ["1789", "Fall of the Bastille", "Fearing an attack after Necker's firing, Parisians storm the Bastille for weapons on July 14.", "The first journée: crowds change the revolution, and Louis accepts it."],
    ["1789", "Night of August 4", "After the Great Fear, nobles and clergy give up feudal dues, tithes, and tax exemptions.", "Ends the old social order: everyone under the same laws."],
    ["1789", "Declaration of the Rights of Man and Citizen", "Declares men free and equal in rights, with sovereignty in the nation.", "Civic equality and popular sovereignty, though only for men."],
    ["1789", "Women's March on Versailles", "About 7,000 women march for bread and force the royal family to Paris.", "Government now works under the crowd's pressure."],
    ["1790", "Civil Constitution of the Clergy", "The Church becomes a state branch; clergy must swear an oath.", "Splits Catholics from the revolution: the Assembly's biggest blunder."],
    ["1791", "Flight to Varennes", "The royal family flees in disguise and is caught.", "Shows the king is the chief counterrevolutionary; constitutional monarchy is in doubt."],
    ["1791", "Declaration of Pillnitz", "Austria and Prussia threaten to intervene to protect the royal family.", "Raises the threat of war."]
  ],
  people: [
    ["Marquis de Lafayette", "Commander of the National Guard", "Led the National Guard and created the tricolor cockade.", "The moderate face of 1789.", []],
    ["Olympe de Gouges", "Writer and activist", "Wrote the Declaration of the Rights of Woman (1791).", "Used the revolution's own words to demand equality for women.", []],
    ["Julien Raymond", "Free man of color from Saint-Domingue", "Demanded rights for free people of color.", "They won citizenship in 1792.", []],
    ["Pius VI", "Pope", "Condemned the Civil Constitution and the Rights of Man in 1791.", "Began the Church's long opposition to liberalism.", []]
  ],
  results: [
    "The Constitution of 1791 creates a constitutional monarchy; only tax-paying 'active citizens' vote, and power shifts from birth to property.",
    "83 departments, elected judges, the metric system, free trade, and no guilds make France more rational and uniform.",
    "Church land is seized and backs assignats, which cause inflation.",
    "Catholics, émigré nobles, and the king himself turn against the revolution."
  ],
  before: "Act 4.1: the National Assembly and Tennis Court Oath.",
  after: "Act 4.3: war with Austria and Prussia radicalizes the revolution and ends the monarchy.",
  takeaway: "Crowds and peasants pushed the revolution to end privilege and declare equal rights, but the Church split and the king's flight left the new constitutional monarchy unstable."
};

SKEL["4.3"] = {
  q: "How did war with Europe turn a constitutional monarchy into a radical republic, and how did the rest of Europe react?",
  setup: [
    "After Varennes, nobody trusts the king; Pillnitz makes war look likely.",
    "The new Legislative Assembly is inexperienced; the Jacobins are the best-organized club.",
    "Paris shopkeepers and artisans (sans-culottes) suffer from food shortages and inflation."
  ],
  turns: [
    ["1792", "France declares war on Austria", "Girondists push for war; the king hopes defeat will restore him.", "Starts wars lasting until 1815, and war radicalizes everything."],
    ["1792", "Monarchy overthrown", "On August 10 a crowd invades the Tuileries; the royal family is imprisoned.", "The constitutional monarchy ends; the Paris crowd is now the strongest force."],
    ["1792", "France declared a republic", "After Valmy, a Convention elected by all men declares a republic.", "France has no king and offers to help all peoples overthrow theirs."],
    ["1793", "Louis XVI executed", "The Convention convicts and executes Louis in January.", "Europe forms the First Coalition; the Vendée revolts."],
    ["1793", "Girondists purged", "Sans-culottes force the Girondists out; the Mountain takes full control.", "The most radical Jacobins now run the republic."],
    ["1793", "Levée en masse", "Carnot drafts the whole nation for war: soldiers, workers, women, and children.", "The first total war; French armies start winning."],
    ["1795", "Third Partition of Poland", "Russia, Prussia, and Austria crush Kosciuszko and divide what's left of Poland.", "Poland's reform constitution is erased; conservative monarchs strike back."]
  ],
  people: [
    ["Maximilien Robespierre", "Leader of the Committee of Public Safety", "Led the Committee and the Republic of Virtue.", "Became the face of the Terror.", ["Lazare Carnot"]],
    ["Lazare Carnot", "Revolutionary organizer", "Organized the levée en masse.", "Created the citizen armies that saved the republic.", ["Maximilien Robespierre"]],
    ["Edmund Burke", "British conservative", "Wrote Reflections on the Revolution in France (1790).", "His attack on 'blind rationalism' became the handbook of conservatism.", []],
    ["Catherine the Great", "Empress of Russia", "Invaded Poland and joined its partitions.", "Crushed Poland's reform constitution.", ["Tadeusz Kosciuszko"]],
    ["Tadeusz Kosciuszko", "Polish patriot", "Led the 1794 rising against Russia and Prussia.", "Its defeat led to the Third Partition.", ["Catherine the Great"]]
  ],
  results: [
    "France becomes a republic at war with most of Europe, run by the radical Mountain.",
    "Burke versus Paine defines the debate over revolution; Britain represses reformers.",
    "Poland disappears from the map.",
    "The Committee of Public Safety, price ceilings, and the Republic of Virtue launch the Terror."
  ],
  before: "Act 4.2: Varennes, Pillnitz, and the shaky constitutional monarchy.",
  after: "Act 4.4: the Terror peaks, turns on its own leaders, and ends with Thermidor.",
  takeaway: "War with Europe made the revolution radical: the monarchy fell, the king was executed, the Mountain took over, and total war and terror were used to save the republic."
};

SKEL["4.4"] = {
  q: "How did the Terror justify itself, why did it destroy its own leaders, and how did France swing back to order and toward Napoleon?",
  setup: [
    "The Committee of Public Safety has near-dictatorial power during war and revolt.",
    "Robespierre's Republic of Virtue draws on Rousseau's general will.",
    "The sans-culottes want price controls and direct democracy."
  ],
  turns: [
    ["1793", "Women's clubs banned", "Jacobins ban women's clubs, citing 'separate spheres'; Olympe de Gouges is guillotined.", "Women are pushed out of political life."],
    ["1793", "Notre Dame becomes a Temple of Reason", "De-Christianization: a new calendar, churches closed, clergy persecuted.", "Turns much of rural France against the revolution."],
    ["1794", "Danton executed", "Robespierre kills the enragés, then Danton, his fellow revolutionaries.", "No one is safe: the revolution eats its own."],
    ["1794", "Law of 22 Prairial", "Tribunals can convict without real evidence.", "Executions soar; more than 25,000 die in all."],
    ["1794", "9 Thermidor: Robespierre falls", "The Convention arrests Robespierre, and he's executed without trial.", "The Terror ends; the radical phase is over."],
    ["1795", "Constitution of the Year III", "Creates the Directory: two houses, five directors, property-based voting.", "Power goes back to property owners, rejecting both monarchy and democracy."],
    ["1799", "18 Brumaire: Napoleon's coup", "General Napoleon overthrows the weak Directory.", "The army becomes the real power in France."]
  ],
  people: [
    ["Maximilien Robespierre", "Leader of the Committee of Public Safety", "Defended terror as virtue, killed rivals, and fell on 9 Thermidor.", "The model of ideological terror 'in the name of humanity.'", ["Georges Danton"]],
    ["Georges Danton", "Revolutionary leader", "Hero of 1792 who was executed in 1794.", "His death showed the Terror turning on its own leaders.", ["Maximilien Robespierre"]],
    ["Pauline Léon", "Revolutionary activist", "Co-founded the Society of Revolutionary Republican Women.", "Its ban marked women's exclusion from politics.", []],
    ["Napoleon Bonaparte", "General", "Crushed a royalist uprising in 1795 and seized power in 1799.", "Ended the revolutionary republic and began military rule.", []],
    ["Gracchus Babeuf", "Radical", "Led the Conspiracy of Equals (1796) for equal property.", "Executed; later seen as a hero by socialists.", []]
  ],
  results: [
    "The Thermidorian Reaction closes the Jacobins, sets off a 'white terror,' and brings back luxury and Catholic worship.",
    "The middle class and peasants who own land are the lasting winners; society is based on property, not birth.",
    "Women have less freedom after 1795 than before 1789.",
    "The weak Directory depends on the army, setting up Napoleon."
  ],
  before: "Act 4.3: war, the republic, and the Committee of Public Safety.",
  after: "Next: Napoleon's rule spreads the revolution's reforms across Europe.",
  takeaway: "The Terror defended itself as virtue but turned on women, religion, and its own leaders, and after Thermidor France swung back to a property-based republic that came to depend on the army."
};
