SKEL["3.1"] = {
  q: "How did Louis XIV's wars and debts shape France after him, and how did Atlantic trade and slavery expand at the same time?",
  setup: [
    "Louis XIV's expansion has made the rest of Europe form alliances against France.",
    "The Spanish Bourbons want more revenue and control from their American colonies.",
    "Sugar plantations in the Americas depend more and more on enslaved African labor."
  ],
  turns: [
    ["1689", "Nine Years' War begins", "After Louis seizes Strasbourg (1681), the League of Augsburg fights France.", "The balance of power checks France; Ryswick (1697) limits its gains."],
    ["1714", "Treaty of Rastatt", "With Utrecht, ends the War of the Spanish Succession: Philip V keeps Spain, but the crowns can't unite.", "Britain gains Gibraltar and Minorca and becomes the rising power."],
    ["1715", "Duke of Orléans becomes regent", "Five-year-old Louis XV inherits; Orléans governs and gives the Parlement of Paris back its power.", "Nobles regain a way to block the crown, which matters later."],
    ["1720", "Mississippi and South Sea Bubbles burst", "John Law's paper money and Mississippi Company shares collapse in a panic.", "Hurts trust in the monarchy's finances and leaves France wary of reform."],
    ["1726", "Cardinal Fleury takes charge", "Fleury keeps France at peace and stabilizes its finances.", "A calm stretch, but the debt problem is never fixed."],
    ["1786", "Intendants sent to Spanish America", "Charles III's Bourbon reforms tighten taxes and favor Spanish-born officials.", "Greater control breeds creole resentment and later independence movements."]
  ],
  people: [
    ["John Law", "Financial planner in France", "Created a bank issuing paper money and the Mississippi Company.", "Its collapse in 1720 damaged French finances and trust.", ["Duke of Orléans"]],
    ["Duke of Orléans", "Regent of France", "Governed for Louis XV and restored the Parlement's powers.", "Gave noble courts a tool to resist royal reform.", ["John Law"]],
    ["Cardinal Fleury", "Louis XV's chief minister", "Kept peace and steadied finances from 1726.", "Stability without solving the debt.", []],
    ["Charles III", "Bourbon king of Spain", "Reformed colonial government: new viceroyalty, intendants, opened ports.", "His reforms raised revenue but angered creoles.", []]
  ],
  results: [
    "France stays powerful but carries Louis XIV's debts, and the Parlement can resist the crown.",
    "Spain tightens its empire; peninsulares versus creoles becomes a growing tension.",
    "Sugar profits drive the transatlantic slave trade; in 1725 about 90% of Jamaica's people are enslaved.",
    "Smuggling, piracy, and privateering make Atlantic trade violent and competitive."
  ],
  before: "Act 2.5: Louis XIV's wars, the Spanish succession crisis, and his debts.",
  after: "Act 3.2: slave-based trade and colonial rivalry lead to global wars, and France's debt keeps growing toward 1789.",
  takeaway: "After Louis XIV, France was powerful but in debt and unstable, while Bourbon Spain tightened its colonies and the Atlantic economy grew on enslaved labor."
};

SKEL["3.2"] = {
  q: "How did slave-based Atlantic trade lead to global wars, and how did Britain's victory set up colonial revolt?",
  setup: [
    "Triangular trade links Europe, Africa, and the Americas: goods, enslaved people, and sugar.",
    "European rivalries now reach North America, the Caribbean, and India.",
    "Prussia and Austria are rivals inside Europe."
  ],
  turns: [
    ["1740", "Frederick II invades Silesia", "Frederick breaks the Pragmatic Sanction and seizes Silesia from Maria Theresa.", "Starts the War of the Austrian Succession; Prussia keeps Silesia at Aix-la-Chapelle (1748)."],
    ["1756", "Diplomatic Revolution", "Old enemies France and Austria ally; Britain sides with Prussia.", "Shows interests now override old rivalries."],
    ["1757", "Battle of Plassey", "Robert Clive defeats French-aligned forces in Bengal.", "Britain begins to dominate India."],
    ["1759", "Battle of Quebec", "Britain defeats France in Canada.", "France loses North America."],
    ["1763", "Treaty of Paris (1763)", "Britain gains Canada and French land east of the Mississippi; Prussia keeps Silesia at Hubertusburg.", "Britain becomes the leading global power, but everyone is deep in debt."],
    ["1764", "Sugar Act", "Britain taxes the colonies to pay for defending its bigger empire; the Stamp Act follows in 1765.", "Colonists protest taxation without representation: the road to revolution."]
  ],
  people: [
    ["Frederick II (the Great)", "King of Prussia", "Seized Silesia and survived the Seven Years' War.", "Made Prussia a great power.", ["Maria Theresa"]],
    ["Maria Theresa", "Habsburg ruler", "Defended her inheritance with Hungarian support and allied with France.", "Kept Austria intact, though she lost Silesia.", ["Frederick II (the Great)"]],
    ["William Pitt the Elder", "British war leader", "Focused Britain's resources on beating France overseas.", "His strategy won Britain a global empire.", ["Robert Clive"]],
    ["Robert Clive", "British commander in India", "Won the Battle of Plassey in 1757.", "Started British dominance in India.", ["William Pitt the Elder"]]
  ],
  results: [
    "About 12 million Africans are forced across the Atlantic; the Middle Passage, seasoning, and slave codes make slavery brutal and hereditary.",
    "Enslaved people keep their cultures, build communities, and sometimes revolt; the 1789 Brookes diagram helps abolitionists.",
    "Prussia keeps Silesia and becomes a great power.",
    "Britain wins Canada and India but faces huge debt, so it taxes its colonies."
  ],
  before: "Act 3.1: sugar, slavery, and colonial rivalry; Act 2.6: the fragile Pragmatic Sanction.",
  after: "Act 3.6: colonial resistance turns into the American Revolution; France's war debt leads toward 1789.",
  takeaway: "Sugar and slavery fueled global rivalry; Britain won the Seven Years' War and an empire, but its war debts led to the taxes that sparked colonial resistance."
};

SKEL["3.3"] = {
  q: "How did the Scientific Revolution replace old authorities with observation and reason, and how did those ideas spread into politics and religion?",
  setup: [
    "Europeans learn about nature from Aristotle, Ptolemy (an Earth-centered universe), and Church teaching.",
    "The Reformation and exploration have already shaken trust in old authorities.",
    "The English Civil War makes people ask why government exists."
  ],
  turns: [
    ["1543", "Copernicus' On the Revolutions", "Copernicus puts the sun at the center of the universe.", "Challenges Ptolemy and starts the revolution, though his model still uses circles."],
    ["1609", "Kepler's New Astronomy", "Using Brahe's precise data, Kepler shows planets move in ellipses.", "Makes the sun-centered model accurate with math."],
    ["1610", "Galileo's telescope discoveries", "Galileo sees Jupiter's moons, Venus's phases, and the moon's rough surface.", "Hard evidence that the heavens aren't perfect and that Copernicus was right."],
    ["1633", "Galileo condemned", "The Church makes Galileo recant and puts him under house arrest.", "The clash between new science and Church authority."],
    ["1651", "Hobbes' Leviathan", "Hobbes argues selfish people need a sovereign with near-total power to keep order.", "Science's mechanical view applied to politics, in defense of absolute authority."],
    ["1687", "Newton's Principia", "Newton's laws of motion and gravity explain motion on Earth and in the heavens.", "The climax: one set of natural laws explains the universe."],
    ["1690", "Locke's Two Treatises of Government", "Locke argues people have natural rights, and government exists by consent to protect them.", "Opposes Hobbes and absolutism; it will inspire revolutions."]
  ],
  people: [
    ["Nicolaus Copernicus", "Astronomer", "Proposed a sun-centered universe in 1543.", "Started the Scientific Revolution.", ["Johannes Kepler", "Galileo Galilei"]],
    ["Galileo Galilei", "Astronomer and physicist", "Found telescope evidence for Copernicus and was condemned in 1633.", "Symbol of science versus Church authority.", ["Nicolaus Copernicus", "Isaac Newton"]],
    ["Isaac Newton", "Mathematician and physicist", "Wrote the Principia with laws of motion and universal gravitation.", "Unified heaven and earth under natural laws.", ["Galileo Galilei", "Johannes Kepler"]],
    ["Francis Bacon", "Philosopher of science", "Pushed empiricism and induction: learn from observation and experiments.", "Founded the experimental method.", ["René Descartes"]],
    ["René Descartes", "Philosopher and mathematician", "Pushed deduction from doubt and reason ('I think, therefore I am').", "The rationalist alternative to Bacon.", ["Francis Bacon"]],
    ["Thomas Hobbes", "Political philosopher", "Argued for an all-powerful sovereign in Leviathan.", "The case for absolute authority to prevent chaos.", ["John Locke"]],
    ["John Locke", "Political philosopher", "Argued for natural rights, government by consent, and the right to resist.", "Foundation for liberal and revolutionary ideas.", ["Thomas Hobbes"]]
  ],
  results: [
    "Nature is seen as a machine running on laws people can discover.",
    "Science societies (Royal Society 1660, French Academy 1666) spread new knowledge, though women like Cavendish are mostly excluded.",
    "Religion and science clash at times, but most scientists stay religious; Pascal stresses faith beyond reason.",
    "Hobbes and Locke set up the debate between order and rights."
  ],
  before: "Unit 1: Renaissance humanism and the Reformation questioned old authorities.",
  after: "Act 3.4: the Enlightenment applies the scientific method to society, religion, and government.",
  takeaway: "The Scientific Revolution replaced ancient authority with observation, math, and natural laws, and thinkers like Hobbes and Locke applied the same thinking to government."
};

SKEL["3.4"] = {
  q: "What was the Enlightenment, how did its ideas spread, and why did philosophes attack the Church's power but not usually belief in God?",
  setup: [
    "Newton showed nature follows laws; Locke argued for natural rights and toleration.",
    "Britain after 1688 looks like a model: Parliament limits the king, trade thrives, there's some toleration.",
    "France has censorship, noble privilege, and an intolerant official Church."
  ],
  turns: [
    ["1696", "Toland's Christianity Not Mysterious", "Toland argues religion should be understood through reason.", "An early statement of deism: a rational God who doesn't intervene."],
    ["1733", "Voltaire's Letters on the English", "Voltaire praises English toleration and freedom, an indirect attack on France.", "French authorities condemn it; English liberty becomes the philosophes' model."],
    ["1748", "Hume questions miracles", "Hume says miracle claims need real evidence.", "Applies scientific skepticism to religion."],
    ["1762", "Jean Calas executed", "A Protestant is wrongly convicted and executed in Toulouse.", "Voltaire campaigns for him, and the Treatise on Toleration (1763) attacks fanaticism."],
    ["1779", "Lessing's Nathan the Wise", "Lessing's play pleads for toleration among Jews, Christians, and Muslims.", "Toleration widens beyond Christian sects."],
    ["1784", "Kant's 'What Is Enlightenment?'", "Kant says Enlightenment means daring to think for yourself.", "Sums up the movement: reason over blind obedience to authority."]
  ],
  people: [
    ["Voltaire", "French philosophe", "Attacked intolerance and censorship, praised England, wrote Candide and the Treatise on Toleration.", "The best-known voice of the Enlightenment.", ["Émilie du Châtelet"]],
    ["Émilie du Châtelet", "Scientist and translator", "Translated and explained Newton for French readers.", "Spread Newtonian science; a woman doing real science.", ["Voltaire"]],
    ["Immanuel Kant", "German philosopher", "Defined Enlightenment as thinking for yourself.", "Gave the movement its motto.", []],
    ["David Hume", "Scottish philosopher", "Questioned miracles without evidence.", "Pushed skepticism about religious claims.", []],
    ["Gotthold Lessing", "German playwright", "Wrote Nathan the Wise.", "Argued for toleration across religions.", []],
    ["Lady Mary Wortley Montagu", "English writer and traveler", "Described Ottoman life fairly and promoted smallpox inoculation.", "Challenged European prejudice about other cultures.", []]
  ],
  results: [
    "Print, coffeehouses, salons, and lodges create public opinion that governments must answer to.",
    "Deism and toleration change religious debate; only a small radical minority are atheists.",
    "Limits remain: toleration is uneven and most philosophes accept social inequality."
  ],
  before: "Act 3.3: Newton's natural laws and Locke's rights and toleration.",
  after: "Act 3.5: philosophes apply reason to law, the economy, and government.",
  takeaway: "The Enlightenment used reason to criticize censorship, privilege, and intolerance, spread through print and public discussion, and pushed deism and toleration."
};

SKEL["3.5"] = {
  q: "How did philosophes apply reason to law, the economy, and government, and how far did their ideas of equality and toleration really go?",
  setup: [
    "Philosophes move from criticizing religion to proposing practical reforms.",
    "France is the center of debate because of costly wars, corruption, and a weak court.",
    "Mercantilism still treats wealth as limited and fought over."
  ],
  turns: [
    ["1748", "Montesquieu's Spirit of the Laws", "Montesquieu argues for separating the executive, legislative, and judicial powers.", "Shapes later constitutions, though his goal for France was a monarchy limited by the parlements."],
    ["1751", "First volume of the Encyclopedia", "Diderot and d'Alembert publish a huge guide to secular, practical knowledge.", "Spreads Enlightenment ideas past censors by hiding radical ideas in obscure articles."],
    ["1762", "Rousseau's Social Contract", "Rousseau argues for the general will and direct democracy.", "Radical idea of popular sovereignty that will inspire French revolutionaries."],
    ["1764", "Beccaria's On Crimes and Punishments", "Beccaria attacks torture and the death penalty and wants quick trials and certain punishment.", "Applies reason to law: the greatest good for the greatest number."],
    ["1776", "Adam Smith's Wealth of Nations", "Smith argues free markets and self-interest grow wealth for everyone.", "Rejects mercantilism; founds laissez-faire economics."],
    ["1783", "Mendelssohn's Jerusalem", "Mendelssohn argues for a religiously neutral state and equal rights for Jews.", "Pushes toleration further than Locke did."]
  ],
  people: [
    ["Montesquieu", "French philosophe and noble of the robe", "Wrote Spirit of the Laws and the Persian Letters.", "Gave the world separation of powers.", ["Jean-Jacques Rousseau"]],
    ["Jean-Jacques Rousseau", "Philosophe", "Wrote the Social Contract: the general will, freedom through community.", "The most radical democrat; inspired the Jacobins.", ["Montesquieu", "Adam Smith"]],
    ["Denis Diderot", "Editor of the Encyclopedia", "Led the Encyclopedia and criticized empire.", "Spread practical and secular knowledge across Europe.", []],
    ["Cesare Beccaria", "Italian legal reformer", "Attacked torture and capital punishment.", "Shaped legal reforms, especially in central and eastern Europe.", []],
    ["Adam Smith", "Scottish economist", "Argued for free trade and against mercantilism.", "Father of laissez-faire economics.", ["Jean-Jacques Rousseau"]],
    ["Moses Mendelssohn", "Jewish philosopher", "Led the Haskalah and argued for equal civil rights for Jews.", "Model for Lessing's Nathan and a broader idea of toleration.", []],
    ["Johann Gottfried Herder", "German critic of empire", "Argued cultures can't be ranked and European culture isn't universal.", "An early voice of cultural relativism against empire.", ["Denis Diderot"]]
  ],
  results: [
    "Reform ideas spread to law (Beccaria), economics (physiocrats, Smith), and government (Montesquieu, Rousseau).",
    "Toleration has limits: Jews and Muslims are often stereotyped even by philosophes.",
    "Most philosophes support empire; only a few (Diderot, Herder, Kant) condemn conquest and slavery.",
    "Salon women give philosophes protection and contacts, but philosophes want better education for women, not equality."
  ],
  before: "Act 3.4: the Enlightenment's foundations, print culture, and toleration.",
  after: "Acts 3.6 and 4.1: Americans and the French put these ideas into practice; Rousseau shapes the Revolution.",
  takeaway: "Philosophes applied reason to law, the economy, and government, producing separation of powers, free markets, and popular sovereignty, but their equality and toleration had real limits."
};

SKEL["3.6"] = {
  q: "Why did Britain's colonies revolt after 1763, and how did the American Revolution affect Britain and Europe?",
  setup: [
    "Britain won the Seven Years' War but has huge debts and a big new empire to defend.",
    "Britain thinks the colonies, the war's main winners, should help pay.",
    "Colonists believe only their own assemblies can tax them."
  ],
  turns: [
    ["1765", "Stamp Act", "Britain taxes printed documents and newspapers in the colonies.", "Colonists protest 'no taxation without representation'; Britain repeals it but passes the Declaratory Act."],
    ["1770", "Boston Massacre", "British troops sent after the Townshend Acts fire on a Boston crowd.", "The pattern of tax, resist, and retry gets angrier each round."],
    ["1773", "Boston Tea Party", "Colonists dump taxed tea into Boston harbor.", "Britain answers with the Intolerable Acts (1774), which push the colonies to unite."],
    ["1776", "Declaration of Independence", "After Common Sense, Congress declares independence using Locke's ideas.", "Turns a tax protest into a revolution for self-government."],
    ["1778", "France allies with the Americans", "France (then Spain) joins to weaken Britain.", "Makes victory possible, but deepens France's debt."],
    ["1783", "Treaty of Paris (1783)", "After Yorktown (1781), Britain recognizes American independence.", "Proves a government can be built on consent without kings or nobles."]
  ],
  people: [
    ["George III", "King of Great Britain", "Chose his own ministers and pushed to keep control of the colonies.", "Lost the colonies, though he regained influence at home.", ["Lord North", "William Pitt the Younger"]],
    ["Lord North", "British chief minister", "Led the government through the colonial crisis and war (1770–1782).", "His policies led to American independence.", ["George III"]],
    ["Thomas Paine", "Radical writer", "Wrote Common Sense (1776).", "Convinced many colonists independence was the only option.", []],
    ["John Wilkes", "London radical", "Attacked the government in The North Briton and was repeatedly kept from his seat.", "Colonists saw his case as proof of a plot against liberty.", ["George III"]],
    ["William Pitt the Younger", "British prime minister", "Won in 1784 with the king's support; dropped parliamentary reform.", "Showed British reform pressure was real but limited.", ["George III"]]
  ],
  results: [
    "The United States becomes a republic founded on a written constitution and popular sovereignty.",
    "Britain faces reform pressure (Yorkshire Association) but makes few changes.",
    "Liberty is limited to free white men; women, enslaved people, and Native Americans are excluded.",
    "France's war debt pushes it toward the crisis of 1789."
  ],
  before: "Act 3.2: the Seven Years' War left Britain in debt and started colonial taxes; Act 3.5: Locke and Montesquieu's ideas.",
  after: "Act 4.1: French war debt from helping America leads to the financial crisis and the Revolution.",
  takeaway: "British taxes after 1763 met colonial resistance that became a revolution for government by consent, inspiring Europe and leaving France deeper in debt."
};
