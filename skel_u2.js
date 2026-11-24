// Act skeletons: the teach-first lesson for each act.
// q: the big question. setup: what you need to know going in. turns: [year, title (matches a timeline event when possible), what happened, so what].
// people: [name, role, what they did, why it matters, [connected people]]. results: how it ended up. before/after: links to the neighboring acts.
// takeaway: the one sentence to remember.
const SKEL = {};

SKEL["2.1"] = {
  q: "How did a search for a faster route to Asian goods turn into a global contest for empire?",
  setup: [
    "European states want Asian spices and luxury goods without paying Ottoman and Italian middlemen.",
    "Better ships (the caravel), compasses, and maps make long ocean voyages possible.",
    "Monarchs are building stronger states and want new sources of wealth to pay for them."
  ],
  turns: [
    ["1488", "Dias rounds the Cape of Good Hope", "Portugal works its way down the African coast, and Dias reaches Africa's southern tip.", "Proves a sea route around Africa to Asia is possible."],
    ["1492", "Columbus reaches the Americas", "Sailing west for Spain to reach Asia, Columbus lands in the Caribbean instead.", "Opens the Americas to Spain and starts conquest, colonies, and the Columbian Exchange."],
    ["1498", "Vasco da Gama reaches India", "Da Gama sails around Africa to India.", "Gives Portugal direct access to Indian Ocean trade and a trading-post empire."],
    ["1521", "Cortés topples the Aztec Empire", "Cortés defeats the Aztecs with steel and guns, Indigenous allies, and above all smallpox.", "Exploration becomes conquest. Disease causes a catastrophic Indigenous population collapse."],
    ["1532", "Pizarro conquers the Inca Empire", "Pizarro takes the Inca Empire the same way.", "Spain gains huge silver mines that will fund its wars in Europe."],
    ["1552", "Las Casas exposes Spanish cruelty", "Las Casas condemns how Spanish colonists treat Indigenous people.", "His writings feed the Black Legend, which Spain's rivals use against it."]
  ],
  people: [
    ["Prince Henry the Navigator", "Portuguese patron of exploration", "Sponsored voyages down the African coast.", "Started Portugal's push that led to Dias and da Gama.", ["Vasco da Gama"]],
    ["Christopher Columbus", "Explorer for Spain", "Sailed west in 1492 and reached the Americas.", "Opened the Americas to European conquest and the Columbian Exchange.", ["Hernán Cortés"]],
    ["Vasco da Gama", "Portuguese navigator", "Reached India by sailing around Africa in 1498.", "Gave Portugal direct sea trade with Asia.", ["Prince Henry the Navigator"]],
    ["Hernán Cortés", "Spanish conquistador", "Conquered the Aztec Empire by 1521.", "Showed how Spain would turn exploration into a land empire.", ["Christopher Columbus", "Bartolomé de las Casas"]],
    ["Bartolomé de las Casas", "Spanish priest and critic", "Condemned the abuse of Indigenous peoples.", "Early critic of colonial cruelty; his work fed the Black Legend.", ["Hernán Cortés"]]
  ],
  results: [
    "Spain builds a colonial system (encomienda, haciendas, silver mining) and Portugal a trading empire.",
    "Plantations turn to enslaved Africans, creating the Atlantic slave trade.",
    "The Columbian Exchange moves crops, animals, diseases, and people between the hemispheres.",
    "Mercantilism makes colonies part of the competition between European states."
  ],
  before: "Unit 1: Renaissance curiosity, new monarchies, and the printing press helped make exploration possible.",
  after: "American silver funds Philip II's wars in Act 2.2, and colonial rivalry grows into the global wars of Unit 3.",
  takeaway: "New trade routes led to conquest, colonies, forced labor, and an Atlantic economy that made overseas empire part of the struggle for power in Europe."
};

SKEL["2.2"] = {
  q: "Why did religious wars tear apart the Netherlands and France, and why did rulers start putting stability ahead of religion?",
  setup: [
    "The Reformation has split western Europe into Catholics, Lutherans, and Calvinists.",
    "The Peace of Augsburg (1555) recognized Catholics and Lutherans in the Empire, but not Calvinists.",
    "Religion mixes with politics: who controls taxes, local rights, and the crown."
  ],
  turns: [
    ["1556", "Philip II inherits Spain", "Charles V splits his lands; Philip gets Spain, the Netherlands, and the Americas.", "A devout Catholic king with American silver sets out to crush heresy and centralize control."],
    ["1567", "Alba's Council of Blood", "Philip sends the Duke of Alba to punish the rebellious Netherlands.", "Harsh repression turns a tax-and-rights protest into a full revolt led by William of Orange."],
    ["1572", "St. Bartholomew's Day Massacre", "Catholic mobs kill thousands of Huguenots, starting in Paris, after the attack on Coligny.", "Ends hopes of compromise in France and pushes Huguenots to argue that persecuting rulers can be resisted."],
    ["1579", "Union of Utrecht", "The Protestant northern provinces unite against Spain; the Catholic south returns to Spain.", "The northern Dutch Republic is effectively independent (recognized in 1648)."],
    ["1588", "Spanish Armada defeated", "Philip's fleet sent to invade Protestant England is destroyed by English ships and storms.", "Philip's plan to dominate Protestant Europe fails; England survives as a Protestant power."],
    ["1593", "Henry IV converts to Catholicism", "Huguenot Henry of Navarre, now the legal king, becomes Catholic to win over France.", "The politique choice: political unity matters more than religious purity."],
    ["1598", "Edict of Nantes", "France stays Catholic, but Huguenots get limited religious and legal protections.", "Ends the French Wars of Religion with toleration for the sake of stability."]
  ],
  people: [
    ["Philip II", "Catholic king of Spain", "Fought the Dutch Revolt and sent the Armada against England.", "The champion of militant Catholicism, whose overreach drained Spain.", ["William of Orange", "Elizabeth I"]],
    ["William of Orange", "Leader of the Dutch Revolt", "Led resistance to Spanish rule in the Netherlands.", "Founding figure of the independent Dutch Republic.", ["Philip II"]],
    ["Elizabeth I", "Protestant queen of England", "Set up a moderate Protestant church and backed the Dutch rebels.", "Kept England Protestant and defeated the Armada.", ["Mary, Queen of Scots", "Philip II"]],
    ["Catherine de Médicis", "French queen mother", "Tried to balance the Guise Catholics and the Huguenots to protect the crown.", "Her balancing act failed in the St. Bartholomew's Day Massacre.", ["Admiral Coligny", "Henry IV"]],
    ["Henry IV", "First Bourbon king of France", "Converted to Catholicism and issued the Edict of Nantes.", "The model politique who ended France's religious wars.", ["Catherine de Médicis"]]
  ],
  results: [
    "The northern Netherlands breaks free and becomes the Protestant Dutch Republic.",
    "England survives as a Protestant power; Spain's dominance starts to fade.",
    "France ends its civil wars with limited toleration and a stronger monarchy under the Bourbons."
  ],
  before: "Act 2.1: American silver paid for Philip II's wars. Unit 1: the Reformation created the religious divide.",
  after: "Act 2.3: the same unsolved problem (Calvinists left out of Augsburg) explodes in the Thirty Years' War.",
  takeaway: "The religious wars started as Catholic versus Protestant, but rulers learned that destroying the state over religion was a disaster, so stability began to outweigh religious purity."
};

SKEL["2.3"] = {
  q: "How did a Protestant revolt in Bohemia become a Europe-wide war about power, and what did the peace change?",
  setup: [
    "The Holy Roman Empire is split into hundreds of states, and many princes fear a stronger emperor.",
    "The Peace of Augsburg left Calvinists unrecognized.",
    "The Catholic Habsburgs rule both Austria and Spain, which worries France."
  ],
  turns: [
    ["1618", "Defenestration of Prague", "Ferdinand limits Protestant rights in Bohemia; Protestants throw his officials out a window and choose Frederick V as king.", "Starts the war as a religious and political revolt."],
    ["1620", "Battle of White Mountain", "Ferdinand's forces crush Frederick V.", "Bohemia goes back under Habsburg and Catholic control, and the war spreads."],
    ["1629", "Edict of Restitution", "Ferdinand orders Church lands seized by Protestants returned to Catholics.", "Alarms Protestant princes, who now fear for their lands and independence."],
    ["1630", "Sweden enters the war", "Gustavus Adolphus invades to help the Protestants and gain influence.", "Saves the Protestant side; he wins at Lützen (1632) but dies there."],
    ["1635", "France enters the war", "Catholic France, led by Richelieu, fights the Catholic Habsburgs.", "The turning point: the war is now about power, not religion."],
    ["1648", "Peace of Westphalia", "Calvinism is recognized, princes gain control of their states, and Dutch and Swiss independence are confirmed.", "The Empire stays divided, and a system of sovereign states replaces religious unity."]
  ],
  people: [
    ["Ferdinand II", "Catholic Habsburg emperor", "Restricted Protestants in Bohemia and issued the Edict of Restitution.", "His push for Catholic control started and widened the war.", ["Frederick V", "Wallenstein"]],
    ["Frederick V", "Calvinist 'Winter King' of Bohemia", "Accepted the Bohemian crown and lost it at White Mountain.", "His brief reign set off the war.", ["Ferdinand II"]],
    ["Wallenstein", "Imperial general", "Built a huge army that beat Denmark for Ferdinand.", "Grew so powerful that Ferdinand had him assassinated in 1634.", ["Ferdinand II"]],
    ["Gustavus Adolphus", "Protestant king of Sweden", "Invaded Germany in 1630 and won at Lützen, where he was killed.", "Rescued the Protestant cause and made Sweden a major power.", ["Ferdinand II"]],
    ["Cardinal Richelieu", "French chief minister", "Brought Catholic France into the war against the Habsburgs.", "Proved that state power now outweighed religion.", ["Ferdinand II"]]
  ],
  results: [
    "About a third of the German population dies from fighting, looting, disease, and hunger.",
    "The Holy Roman Empire stays weak and divided; the princes are nearly sovereign.",
    "France and Sweden gain power; the Dutch and Swiss are independent.",
    "Religious wars give way to wars over the balance of power."
  ],
  before: "Act 2.2: the Peace of Augsburg's gaps and the politique idea of putting the state first.",
  after: "Acts 2.5 and 2.6: France rises under Louis XIV, while Austria and Prussia build power outside the divided Empire.",
  takeaway: "The Thirty Years' War started over religion in Bohemia but became a struggle for power, and the Peace of Westphalia left a divided Empire and a Europe of sovereign states."
};

SKEL["2.4"] = {
  q: "After the religious wars, who should hold power: a king, a parliament, or a republic? How did the Dutch, England, and France answer differently?",
  setup: [
    "After the religious wars, the big question shifts from which religion to how power should be organized.",
    "The Stuart kings believe in divine right, but Parliament controls taxes.",
    "Puritans want the Church of England to be more Protestant."
  ],
  turns: [
    ["1628", "Petition of Right", "Parliament makes Charles I accept limits: no taxes without its consent and no jailing without cause.", "Shows Parliament claiming legal limits on the king."],
    ["1629", "Charles I begins his Personal Rule", "Charles rules eleven years without Parliament.", "Deepens distrust; when a Scottish revolt forces him to recall Parliament in 1640, the showdown begins."],
    ["1642", "English Civil War begins", "Cavaliers (the king) fight Roundheads (Parliament); Cromwell becomes Parliament's key general.", "The fight over who controls England becomes a war."],
    ["1649", "Charles I executed", "Parliament wins, tries the king, and executes him; England becomes a republic dominated by Cromwell.", "A king is put to death by his own subjects, but military rule under Cromwell proves unpopular."],
    ["1660", "Restoration of Charles II", "The monarchy returns, but Parliament stays powerful.", "England goes back to kings, on Parliament's terms."],
    ["1688", "Glorious Revolution", "Parliament invites William III and Mary; the Catholic James II flees.", "A mostly bloodless change that settles the fight in Parliament's favor."],
    ["1689", "English Bill of Rights", "Limits the crown: Parliament must approve taxes and armies, and elections and speech in Parliament are protected.", "England becomes a constitutional monarchy, the opposite of France."]
  ],
  people: [
    ["James I", "First Stuart king of England", "Claimed divine right and clashed with Parliament over money.", "Set up the king-versus-Parliament conflict.", ["Charles I"]],
    ["Charles I", "Stuart king of England", "Ruled without Parliament and fought the Civil War.", "His overreach led to his own execution in 1649.", ["Oliver Cromwell", "James I"]],
    ["Oliver Cromwell", "Lord Protector of England", "Led Parliament's army, then ruled England with military backing.", "Showed that a republic could turn into a military dictatorship.", ["Charles I"]],
    ["James II", "Catholic king of England", "Openly favored Catholics and was driven out in 1688.", "His fall produced the Glorious Revolution and the Bill of Rights.", ["William III"]],
    ["William III", "Dutch leader, later king of England", "Led Dutch resistance to Louis XIV and took England's throne with Mary in 1688.", "Linked the Dutch Republic and England against French power.", ["James II"]],
    ["Robert Walpole", "Britain's leading minister", "Led the government for about twenty years through Parliament.", "Shows power shifting from the king to Parliament and ministers.", []]
  ],
  results: [
    "The Dutch Republic shows a republic can get rich through trade, shipping, and banking without a king.",
    "England becomes a constitutional monarchy where Parliament holds lasting power.",
    "France goes the other way: Richelieu and Mazarin strengthen the crown, the Fronde fails, and Louis XIV begins personal rule in 1661."
  ],
  before: "Act 2.2: Elizabeth I's Protestant England and the Dutch Revolt that created the Republic.",
  after: "Act 2.5: Louis XIV's absolutism is the opposite model; Locke's ideas defend England's limited government.",
  takeaway: "England limited its king through civil war and the Glorious Revolution, the Dutch thrived as a republic, and France moved the opposite way toward absolutism."
};

SKEL["2.5"] = {
  q: "How did Louis XIV make the French monarchy dominant, and what did that power cost France?",
  setup: [
    "Richelieu and Mazarin have already strengthened the crown.",
    "The Fronde (1649–1652), a noble revolt, taught young Louis that nobles could threaten him.",
    "England is limiting its king at the same time."
  ],
  turns: [
    ["1661", "Louis XIV begins personal rule", "When Mazarin dies, Louis rules with no chief minister.", "The start of French absolutism: the king himself runs war, religion, and the economy."],
    ["1667", "War of Devolution", "Louis claims the Spanish Netherlands through his wife; England, Sweden, and the Dutch ally to stop him.", "Starts the pattern of coalitions forming against France: the balance of power."],
    ["1672", "Louis invades the Dutch Republic", "Louis attacks the Dutch; William III becomes his main enemy.", "France gains land at Nijmegen (1678), but resistance hardens."],
    ["1685", "Edict of Nantes revoked", "Louis outlaws Protestantism; about a quarter million Huguenots flee.", "Gains religious unity but loses skilled workers and damages his reputation."],
    ["1701", "War of the Spanish Succession begins", "Charles II of Spain leaves his throne to Louis's grandson Philip; the Grand Alliance goes to war.", "Europe fights to stop France and Spain from uniting."],
    ["1713", "Treaty of Utrecht", "Philip V keeps Spain, but France and Spain can never merge; Britain gains Gibraltar.", "The balance of power holds, and Britain rises."],
    ["1715", "Louis XIV dies", "France is still a great power but deeply in debt from war and spending.", "Shows both the strength and the cost of absolutism."]
  ],
  people: [
    ["Louis XIV", "The Sun King", "Ruled personally from 1661, built Versailles, fought four major wars, and revoked the Edict of Nantes.", "The model of absolute monarchy in Europe.", ["Jean-Baptiste Colbert", "Jacques-Bénigne Bossuet", "Philip V"]],
    ["Cardinal Mazarin", "French chief minister", "Ran France during Louis's childhood and survived the Fronde.", "Strengthened the crown that Louis inherited.", ["Louis XIV"]],
    ["Jean-Baptiste Colbert", "French finance minister", "Strengthened royal finances with mercantilist policies.", "Paid for Louis's power.", ["Louis XIV"]],
    ["Jacques-Bénigne Bossuet", "French bishop and theorist", "Argued kings get their power from God and answer only to God.", "Gave absolutism its divine-right justification.", ["Louis XIV"]],
    ["Philip V", "First Bourbon king of Spain", "Louis's grandson; inherited Spain in 1700.", "His inheritance caused the War of the Spanish Succession.", ["Louis XIV"]]
  ],
  results: [
    "Versailles turns nobles into courtiers competing for the king's favor instead of rivals.",
    "France is Europe's strongest power, but coalitions repeatedly check its expansion.",
    "Revoking the Edict of Nantes and constant war leave France poorer and in debt.",
    "Bossuet's divine right contrasts with Locke's government by consent."
  ],
  before: "Act 2.4: the Fronde and Mazarin set Louis up, while England went the opposite way.",
  after: "Act 3.1: France after Louis struggles with his debts, and the balance of power shapes the 1700s wars.",
  takeaway: "Louis XIV made the monarchy dominant through Versailles, divine right, war, and religious uniformity, but his wars united Europe against him and left France in debt."
};

SKEL["2.6"] = {
  q: "How did Austria, Prussia, and Russia build strong states in central and eastern Europe, and why did Poland fail to?",
  setup: [
    "Central and eastern Europe is mostly rural, with powerful nobles and serfs.",
    "After 1648, the Habsburg emperor has little power in the Empire, so rulers build up their own lands.",
    "The Ottoman Empire still threatens from the southeast; Sweden dominates the Baltic."
  ],
  turns: [
    ["1613", "Romanov dynasty begins", "The Romanovs take the Russian throne after the Time of Troubles.", "Restores stability that Peter the Great later builds on."],
    ["1683", "Siege of Vienna", "The Ottomans besiege Vienna; John III Sobieski of Poland helps save it.", "Austria pushes the Ottomans back and takes Hungary."],
    ["1697", "Peter the Great tours western Europe", "Peter studies western ships, weapons, and industry.", "Starts his drive to westernize and militarize Russia."],
    ["1709", "Battle of Poltava", "Peter's rebuilt army crushes Charles XII of Sweden.", "Ends Swedish dominance; Russia wins Baltic land at Nystad (1721) and becomes a great power."],
    ["1713", "Pragmatic Sanction", "Charles VI gets Europe to accept his daughter Maria Theresa as heir.", "Fragile: Frederick II of Prussia breaks it by seizing Silesia in 1740."],
    ["1722", "Table of Ranks", "Peter ties noble status to service in the army or government.", "Binds the nobility to the state."]
  ],
  people: [
    ["Peter the Great", "Tsar of Russia", "Westernized Russia, built a navy, beat Sweden, founded St. Petersburg, and created the Table of Ranks.", "Turned Russia into a European great power.", ["Charles XII"]],
    ["Charles XII", "King of Sweden", "Beat Russia at Narva but lost at Poltava.", "His defeat ended Sweden's time as a great power.", ["Peter the Great"]],
    ["Frederick William, the Great Elector", "Ruler of Brandenburg-Prussia", "Centralized his scattered lands, raised taxes, built an army, and allied with the Junkers.", "Founded the Prussian military state.", ["Frederick William I"]],
    ["Frederick William I", "King of Prussia", "Built one of Europe's largest armies from a small population.", "Handed his son Frederick II the army that seized Silesia.", ["Frederick William, the Great Elector"]],
    ["Charles VI", "Habsburg emperor", "Issued the Pragmatic Sanction so Maria Theresa could inherit.", "His fragile deal led to the War of the Austrian Succession.", []],
    ["John III Sobieski", "King of Poland", "Helped lift the Ottoman siege of Vienna in 1683.", "A rare Polish success; the weak Polish state could not build on it.", []]
  ],
  results: [
    "Austria becomes a large, diverse Danube empire, but it still bargains with local nobles.",
    "Prussia becomes a small state with a huge army, run with the Junker nobility.",
    "Russia becomes a Baltic and European power under Peter.",
    "Poland's elected king and liberum veto (one noble can block anything) keep it weak and open to foreign control."
  ],
  before: "Act 2.3: the Peace of Westphalia weakened the emperor, so rulers built power in their own lands.",
  after: "Act 3.2: Prussia and Austria fight over Silesia, and these powers join the global wars of the 1700s.",
  takeaway: "Austria, Prussia, and Russia built strong states by taming or bargaining with their nobles and building armies, while Poland's weak central government left it vulnerable."
};
