SKEL["5.1"] = {
  q: "From the Renaissance to the Enlightenment, how did ideas about women and family change, and why did almost no movement make women equal?",
  setup: [
    "This act follows one theme, women and family, across four movements: Renaissance, Reformation, Scientific Revolution, and Enlightenment.",
    "Each movement talks about women, but almost none treat them as equals until Wollstonecraft.",
    "Family life is shaped by money and survival: late marriage, many births, and high child death."
  ],
  turns: [
    ["1486", "Hammer of Witches published", "Two monks publish a pope-approved witch-hunting guide calling women gullible, carnal, and defective.", "Gives church and state a tool in witch hunts that kill 70,000 to 100,000 people, mostly older single women."],
    ["1525", "Luther marries", "Luther marries a former nun; Protestants praise marriage and wives as partners.", "Marriage becomes sacred and divorce possible, but wives stay under their husbands."],
    ["1666", "Cavendish's Observations upon Experimental Philosophy", "Cavendish mocks the Royal Society for loving instruments over useful knowledge.", "A rare woman in science, writing from outside the institutions that excluded women."],
    ["1710", "Berlin Academy rejects Winkelmann", "The academy refuses to let astronomer Maria Winkelmann continue her late husband's work because she's a woman.", "Shows science becoming a male-only profession."],
    ["1762", "Rousseau's Émile", "Rousseau argues women should be educated to please men and raise children: separate spheres.", "Shapes revolutionary leaders, who later ban women's clubs."],
    ["1792", "Wollstonecraft's Vindication of the Rights of Woman", "Wollstonecraft argues men and women share the same reason and deserve the same education.", "Turns the Enlightenment's own ideas into a demand for women's rights."]
  ],
  people: [
    ["Heinrich Krämer and Jacob Sprenger", "Dominican monks", "Wrote The Hammer of Witches (1486).", "Their misogynist guide fueled the witch hunts.", []],
    ["Margaret Cavendish", "English duchess and the top woman in 1600s science", "Debated Descartes and Hobbes and criticized the Royal Society.", "Proved women could do natural philosophy despite exclusion.", ["Maria Winkelmann"]],
    ["Maria Winkelmann", "German astronomer", "Discovered a comet (credited to her husband) and was rejected by the Berlin Academy.", "The clearest case of women pushed out of science.", ["Margaret Cavendish"]],
    ["Queen Christina of Sweden", "Queen of Sweden (r. 1632–1654)", "Brought Descartes to her court.", "The rare woman with power to patronize science.", []],
    ["Madame de Tencin", "Paris salon hostess", "Hosted philosophes and promoted Montesquieu's Spirit of the Laws.", "Shows how salon women spread the Enlightenment.", []],
    ["Mary Wollstonecraft", "English writer and early feminist", "Wrote A Vindication of the Rights of Woman (1792).", "Founded the argument for women's equality based on reason.", []]
  ],
  results: [
    "Christine de Pizan treats wives as working partners, but still in a supporting role.",
    "Protestant marriage gives women literacy and divorce but keeps them under husbands.",
    "Witch hunts fade by 1700 as science, medicine, and insurance lower fear, and elites see the trials could target them.",
    "Salon women spread the Enlightenment, but most philosophes keep women in traditional roles."
  ],
  before: "This act ties back to Units 1 to 3: the Renaissance, Reformation, Scientific Revolution, and Enlightenment.",
  after: "Act 4.4 shows the payoff: Jacobins use Rousseau to ban women's clubs, and Olympe de Gouges is executed.",
  takeaway: "Each movement redefined women's roles, from working partners to sacred wives to salon hostesses, but only Wollstonecraft used reason to demand real equality."
};

SKEL["1.1"] = {
  q: "Why did a new way of thinking, humanism, take off in the wealthy city-states of Italy, and how did it change art and politics?",
  setup: [
    "Italian city-states like Florence and Venice grow rich from trade and banking.",
    "Wealthy families like the Medici pay artists and scholars to show off their power.",
    "Scholars rediscover ancient Greek and Roman texts, especially after Greek scholars flee Constantinople."
  ],
  turns: [
    ["1341", "Petrarch crowned poet laureate", "Petrarch, the father of humanism, is honored for reviving classical learning.", "Humanism: study of the classics to live a good, active life."],
    ["1434", "Cosimo de' Medici takes control of Florence", "The Medici banking family runs Florence from behind the scenes.", "Patronage from rich families pays for Renaissance art and learning."],
    ["1440", "Valla exposes the Donation of Constantine", "Valla uses language analysis to prove a key papal document is a forgery.", "Humanist methods can challenge even the Church's authority."],
    ["1454", "Peace of Lodi", "The big Italian states agree to balance each other's power.", "Keeps peace for 40 years, an early balance of power."],
    ["1494", "French invasion of Italy", "France invades, and Italy becomes a battlefield for foreign powers.", "Shows the divided city-states' weakness; inspires Machiavelli."],
    ["1513", "Machiavelli writes The Prince", "Machiavelli advises rulers to do whatever keeps power, even being feared.", "Politics judged by results, not Christian morality."],
    ["1527", "Sack of Rome", "Charles V's unpaid troops plunder Rome.", "Marks the decline of the Italian Renaissance."]
  ],
  people: [
    ["Petrarch", "Italian poet and scholar", "Revived the study of classical texts.", "Father of humanism.", []],
    ["Lorenzo de' Medici", "Ruler of Florence", "Ran Florence and funded artists like Michelangelo.", "Shows how patronage and power drove the Renaissance.", ["Michelangelo"]],
    ["Niccolò Machiavelli", "Florentine diplomat and political writer", "Wrote The Prince (1513).", "Founded realistic, secular political thinking.", []],
    ["Leonardo da Vinci", "Artist and inventor", "Painted the Mona Lisa and filled notebooks with inventions.", "The ideal 'Renaissance man.'", ["Michelangelo"]],
    ["Michelangelo", "Sculptor and painter", "Made the David and the Sistine Chapel ceiling.", "Peak of Renaissance art: classical, realistic, human-centered.", ["Lorenzo de' Medici"]],
    ["Girolamo Savonarola", "Dominican friar", "Preached against Florence's luxury and was executed in 1498.", "A religious backlash against Renaissance worldliness.", []]
  ],
  results: [
    "Humanism, individualism, and secular interests spread among the educated elite.",
    "Art becomes realistic and classical, using perspective and the human body.",
    "Italy stays divided and becomes a battlefield for France and Spain.",
    "Humanism spreads north through the printing press (Act 1.2)."
  ],
  before: "Background: medieval Europe, the Black Death, and Italian trade wealth.",
  after: "Act 1.2: humanism moves north and becomes Christian humanism through printing.",
  takeaway: "Rich Italian city-states and their patrons revived classical learning, creating humanism, realistic art, and secular politics, but their divisions left Italy open to invasion."
};

SKEL["1.2"] = {
  q: "How did the printing press spread the Renaissance north, and how did northern humanists focus on reforming Christianity?",
  setup: [
    "Italian humanism reaches northern Europe through students, trade, and diplomats.",
    "Northern Europe is deeply religious; many want a purer, simpler Christianity.",
    "Before printing, books are copied by hand and are rare and expensive."
  ],
  turns: [
    ["1405", "Christine de Pizan's Book of the City of Ladies", "Christine defends women's abilities and virtue.", "An early argument for women's worth from a professional woman writer."],
    ["1434", "Van Eyck's Arnolfini Portrait", "Van Eyck paints in oils with incredible detail.", "Northern art focuses on realism and everyday life."],
    ["1455", "Gutenberg Bible printed", "Gutenberg uses movable type to print the Bible.", "Books become cheap and fast to produce; ideas spread like never before."],
    ["1511", "Erasmus's The Praise of Folly", "Erasmus mocks corrupt clergy and empty religious rituals.", "Christian humanism: reform the Church using reason and the Bible."],
    ["1516", "More's Utopia", "More imagines an ideal society with shared property and religious toleration.", "Uses humanist ideas to criticize Europe's problems."],
    ["1516", "Erasmus's Greek New Testament", "Erasmus publishes a corrected Greek New Testament.", "Lets scholars like Luther go back to the original Bible."]
  ],
  people: [
    ["Johannes Gutenberg", "Printer", "Invented printing with movable type.", "Made the Reformation and the spread of ideas possible.", ["Desiderius Erasmus"]],
    ["Desiderius Erasmus", "Christian humanist", "Wrote The Praise of Folly and edited the Greek New Testament.", "'Erasmus laid the egg that Luther hatched.'", ["Thomas More"]],
    ["Thomas More", "English humanist and statesman", "Wrote Utopia.", "Later executed for refusing Henry VIII's break with Rome.", ["Desiderius Erasmus"]],
    ["Christine de Pizan", "Writer at the French court", "Wrote The Book of the City of Ladies.", "Early defender of women.", []],
    ["Albrecht Dürer", "German artist", "Made detailed woodcuts and engravings.", "Spread Renaissance art through prints.", []]
  ],
  results: [
    "Printing makes books cheap and literacy grows.",
    "Christian humanists criticize Church corruption and call for Bible-based faith.",
    "Their calls for reform set the stage for Luther."
  ],
  before: "Act 1.1: Italian humanism.",
  after: "Act 1.4: Luther uses printing and humanist Bible scholarship to start the Reformation.",
  takeaway: "The printing press spread humanism north, where Christian humanists like Erasmus used it to criticize Church corruption and call for reform."
};

SKEL["1.3"] = {
  q: "How did the 'new monarchs' of France, England, and Spain build stronger, more centralized states?",
  setup: [
    "In the Middle Ages, kings shared power with nobles and the Church.",
    "Long wars (the Hundred Years' War, the Wars of the Roses) weaken nobles.",
    "New armies and taxes let kings rely less on nobles."
  ],
  turns: [
    ["1453", "Hundred Years' War ends", "France drives England out of most of France.", "French kings gain prestige, a standing army, and taxes."],
    ["1469", "Ferdinand and Isabella marry", "The rulers of Aragon and Castile unite their kingdoms.", "Creates the core of a unified Spain."],
    ["1478", "Spanish Inquisition established", "Ferdinand and Isabella set up a royal court to root out false converts.", "Uses religious unity to strengthen royal power."],
    ["1485", "Battle of Bosworth Field", "Henry VII wins, ending the Wars of the Roses.", "The Tudors tame the nobles and rebuild royal finances."],
    ["1492", "Fall of Granada", "Spain conquers the last Muslim kingdom in Iberia, then expels Jews.", "Completes the Reconquista and religious unity, the same year Columbus sails."],
    ["1516", "Concordat of Bologna", "The pope lets the French king choose French bishops.", "The French crown controls its Church without breaking from Rome."],
    ["1519", "Charles V elected Holy Roman Emperor", "Charles inherits Spain, the Netherlands, and Austria and becomes emperor.", "The huge Habsburg empire will face Luther, France, and the Ottomans."]
  ],
  people: [
    ["Isabella of Castile", "Queen of Castile", "United Spain with Ferdinand, conquered Granada, and backed Columbus.", "Built a strong, Catholic Spanish state.", ["Ferdinand of Aragon"]],
    ["Ferdinand of Aragon", "King of Aragon", "Co-ruled Spain and set up the Inquisition.", "Partner in Spanish unification.", ["Isabella of Castile"]],
    ["Henry VII", "First Tudor king of England", "Ended the Wars of the Roses and tamed the nobles.", "Founded the Tudor dynasty and a stronger crown.", []],
    ["Louis XI", "King of France", "Expanded royal lands and power after the Hundred Years' War.", "Called the 'Spider King' for his scheming.", ["Francis I"]],
    ["Francis I", "King of France", "Won control of French bishops in the Concordat of Bologna.", "Strengthened the French crown.", ["Louis XI"]]
  ],
  results: [
    "France, England, and Spain become stronger, more centralized monarchies.",
    "Kings gain armies, taxes, and control over their churches.",
    "The Habsburgs under Charles V become Europe's biggest power."
  ],
  before: "Background: medieval feudal monarchy and the Hundred Years' War.",
  after: "Act 1.4: Charles V faces Luther; Act 2.1: Spain's monarchy funds exploration.",
  takeaway: "New monarchs used armies, taxes, and control of the Church to take power from nobles and build centralized states in France, England, and Spain."
};

SKEL["1.4"] = {
  q: "How did Luther's protest about indulgences become a movement that split the Western Church?",
  setup: [
    "Many Christians resent Church corruption, like selling Church offices and indulgences.",
    "Christian humanists have called for a return to the Bible.",
    "The printing press can spread new ideas fast; German princes resent the pope and the emperor."
  ],
  turns: [
    ["1517", "Luther's Ninety-Five Theses", "Luther challenges indulgence sales after Tetzel's preaching.", "Printed copies spread across Germany in weeks."],
    ["1520", "Luther's reform pamphlets", "Luther argues for salvation by faith alone, the Bible alone, and the priesthood of all believers.", "Turns a protest into a new theology."],
    ["1521", "Diet of Worms", "Luther refuses to recant before Charles V and is declared an outlaw.", "Frederick the Wise protects him, showing princes' support is key."],
    ["1524", "German Peasants' War", "Peasants revolt, citing Luther; Luther sides with the princes.", "Lutheranism becomes a movement of princes and order, not social revolution."],
    ["1529", "Marburg Colloquy", "Luther and Zwingli fail to agree on the Eucharist.", "Protestants divide into separate branches."],
    ["1541", "Calvin settles in Geneva", "Calvin builds a strict reformed city based on predestination.", "Calvinism becomes the international, organized form of Protestantism."]
  ],
  people: [
    ["Martin Luther", "German monk and reformer", "Wrote the Ninety-Five Theses and refused to recant at Worms.", "Started the Protestant Reformation.", ["Charles V", "Frederick the Wise", "Johann Tetzel"]],
    ["Johann Tetzel", "Dominican indulgence preacher", "Sold indulgences in Germany.", "His sales provoked Luther's theses.", ["Martin Luther"]],
    ["Frederick the Wise", "Elector of Saxony", "Protected Luther after Worms.", "Showed how princes made the Reformation survive.", ["Martin Luther"]],
    ["Charles V", "Holy Roman Emperor and king of Spain", "Condemned Luther at Worms but was distracted by France and the Ottomans.", "Couldn't stop the Reformation.", ["Martin Luther"]],
    ["Ulrich Zwingli", "Swiss reformer", "Led reform in Zurich and clashed with Luther over the Eucharist.", "Showed Protestants splitting.", ["Martin Luther"]],
    ["John Calvin", "French-born reformer", "Wrote the Institutes and led Geneva.", "Spread a disciplined Protestantism across Europe.", []]
  ],
  results: [
    "Lutheranism spreads in northern Germany and Scandinavia, backed by princes.",
    "Protestantism splits into Lutherans, Zwinglians, Calvinists, and Anabaptists.",
    "Germany divides along religious lines, settled for a time by the Peace of Augsburg (1555)."
  ],
  before: "Act 1.2: printing and Erasmus's Greek New Testament.",
  after: "Acts 1.5 and 1.6: England's break with Rome and the Catholic response; Act 2.2: the religious wars.",
  takeaway: "Luther's attack on indulgences, spread by printing and protected by German princes, grew into a new theology that permanently split Western Christianity."
};

SKEL["1.5"] = {
  q: "Why did England break with Rome, and why did its official religion keep switching until Elizabeth settled it?",
  setup: [
    "Henry VIII is a Catholic king who has even written against Luther.",
    "He badly wants a male heir, but his marriage to Catherine of Aragon produces only a daughter.",
    "The pope can't grant an annulment because Catherine's nephew is Charles V."
  ],
  turns: [
    ["1527", "Henry VIII seeks an annulment", "Henry asks the pope to end his marriage to Catherine of Aragon.", "The pope refuses, under pressure from Charles V."],
    ["1534", "Act of Supremacy", "Parliament makes Henry head of the Church of England.", "England breaks with Rome for political, not doctrinal, reasons."],
    ["1536", "Dissolution of the monasteries begins", "Henry closes monasteries and takes their lands.", "Enriches the crown and gentry, giving them a stake in the break."],
    ["1549", "Book of Common Prayer", "Under Edward VI, Cranmer writes a Protestant English prayer book.", "England moves in a clearly Protestant direction."],
    ["1555", "Marian persecutions", "Mary I restores Catholicism and burns about 300 Protestants.", "Earns her the name 'Bloody Mary' and makes Catholicism unpopular."],
    ["1559", "Elizabethan Settlement", "Elizabeth creates a moderate Protestant church with some Catholic traditions.", "Ends the swings; Anglicanism becomes England's lasting middle way."]
  ],
  people: [
    ["Henry VIII", "Tudor king of England", "Broke with Rome to end his marriage and closed the monasteries.", "Created the Church of England.", ["Catherine of Aragon", "Anne Boleyn", "Thomas Cromwell"]],
    ["Catherine of Aragon", "Queen of England", "Henry's first wife; aunt of Charles V.", "The annulment fight over her led to the break with Rome.", ["Henry VIII"]],
    ["Thomas Cranmer", "Archbishop of Canterbury", "Annulled Henry's marriage and wrote the Book of Common Prayer.", "Shaped English Protestant worship; burned under Mary.", ["Henry VIII", "Edward VI"]],
    ["Thomas Cromwell", "Henry VIII's chief minister", "Managed the break with Rome and the closing of the monasteries.", "Built the legal machinery of the English Reformation.", ["Henry VIII"]],
    ["Mary I", "Queen of England", "Restored Catholicism and persecuted Protestants.", "Her failure made England more Protestant.", ["Henry VIII"]]
  ],
  results: [
    "England has a national church headed by the monarch.",
    "Religion swings Catholic, Protestant, Catholic, then settles under Elizabeth.",
    "The Elizabethan church is Protestant in belief but keeps bishops and some Catholic ritual."
  ],
  before: "Act 1.4: Luther's Reformation; Act 1.3: the Tudor monarchy.",
  after: "Act 2.2: Elizabeth I faces Catholic threats and the Spanish Armada; Act 2.4: Puritans want more reform.",
  takeaway: "England broke with Rome for political reasons, swung between Protestant and Catholic rulers, and settled on Elizabeth's moderate Anglican middle way."
};

SKEL["1.6"] = {
  q: "How did the Catholic Church reform itself and fight back against Protestantism?",
  setup: [
    "Protestantism is spreading across northern Europe.",
    "Many Catholics already want to fix corruption and deepen faith.",
    "Popes have been slow to respond, partly from fear of councils limiting their power."
  ],
  turns: [
    ["1535", "Ursulines founded", "Angela Merici founds an order of women to teach girls.", "Catholic reform included education and women's religious work."],
    ["1540", "Jesuits approved by the pope", "Ignatius of Loyola's Society of Jesus is approved.", "Disciplined priests who teach, preach, and win back Protestant areas and convert people abroad."],
    ["1542", "Roman Inquisition established", "Pope Paul III sets up a court to fight heresy in Italy.", "The Church uses force and fear against Protestant ideas."],
    ["1545", "Council of Trent opens", "Church leaders meet to answer the Protestants.", "Reaffirms Catholic beliefs and fixes abuses."],
    ["1559", "Index of Prohibited Books", "The Church bans books it considers dangerous.", "Controls the printed word that helped Protestantism."],
    ["1563", "Council of Trent closes", "Trent reaffirms the seven sacraments, faith plus works, and Church tradition, and orders seminaries for priests.", "A clear, unified Catholic identity; no compromise with Protestants."]
  ],
  people: [
    ["Ignatius of Loyola", "Founder of the Jesuits", "Founded the Society of Jesus and wrote the Spiritual Exercises.", "His Jesuits led the Catholic revival.", ["Francis Xavier"]],
    ["Pope Paul III", "Pope", "Approved the Jesuits, set up the Roman Inquisition, and called the Council of Trent.", "Launched the Catholic Reformation.", ["Ignatius of Loyola"]],
    ["Teresa of Ávila", "Spanish mystic and reformer", "Reformed Carmelite convents toward strict, prayerful life.", "Showed spiritual renewal inside the Church.", []],
    ["Angela Merici", "Founder of the Ursulines", "Founded an order to educate girls.", "Showed women's role in Catholic reform.", []],
    ["Francis Xavier", "Jesuit missionary", "Spread Catholicism in Asia.", "Took the Catholic revival worldwide.", ["Ignatius of Loyola"]]
  ],
  results: [
    "Catholicism wins back much of central Europe (Poland, southern Germany, Austria).",
    "Better-trained priests, new orders, and baroque art strengthen Catholic faith.",
    "The religious split hardens, leading to the wars of Act 2.2 and 2.3."
  ],
  before: "Act 1.4: the Protestant challenge.",
  after: "Act 2.2: religious wars between a confident Catholic Church and Protestants.",
  takeaway: "The Catholic Reformation fixed abuses, reaffirmed Catholic teaching at Trent, and used the Jesuits, the Inquisition, and the Index to win back ground and halt Protestantism."
};
