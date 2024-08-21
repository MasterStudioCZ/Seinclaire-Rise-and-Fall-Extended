var investplussprite = './mods/seinclaire/sprites/InvestSpectrePlus.png';
var decibelssprite = './mods/seinclaire/sprites/DecibellsSpectrePlus.png';

GDT.addPlatform({
	id : 'investplus',
	name : 'Invest Spectre +',
	company : 'Investrónics',
	startAmount : 0.03,
		marketKeyPoints:[
		{date:"3/11/4",amount:0.035},
		{date:"4/4/1",amount:0.038},
		{date:"4/8/1",amount:0.0425}
	],
	unitsSold : 0.0425, // 250 000 units. Multiplier: 0.17
	licencePrize : 8000,
	published : '3/7/2', // Mid 1986
	platformRetireDate : '6/5/3', // 1991
	developmentCosts : 4000,
	genreWeightings : [0.8, 1, 1, 0.7, 0.7, 0.8],
	audienceWeightings : [0.9, 1, 0.9],
	techLevel : 2,
	iconUri : investplussprite,
	events : [{
			id : 'investplus-1',
			date : '3/7/2',
			getNotification : function (company) {
				return new Notification({
					header : "Industry News".localize(),
					text : "Investrónics, a Spanish company that is responsible for the distribution of Spectre computers in the country, has released its own licensed clone of the machine it helps to sell. It is called Invest Spectre + and...well, it looks just like a normal Spectre.{n}The device looks almost identical to CX Spectre+, with the only difference being the label - 'Seinclaire' is replaced by 'Invest'.{n}Things are significantly different inside, with all components completely redesigned. The specifications, however, stay almost the same. Plus, the ROM has been modified, which means some incompatibilities for already existing CX Spectre software.{n}The device is available only in Spain; however, the UK release has been promised. It costs 220kr.",
					image : investplussprite
				});
			}
		},
		{
			id : 'investplus-2',
			date : '4/3/4', // 1987
			getNotification : function (company) {
				return new Notification({
					header : "Industry News".localize(),
					text : "Yesterday, Amstart filed a small-claims lawsuit against Investrónics, the company selling its own CX Spectre clone.{n}Amstart wants the company to cease the sale of Invest Spectre + due to 'the infringement of the Spectre trademark' and wants Investrónics to pay it for all the 'damages and lost revenue'.{n} The rumours are that the lawsuit is connected to Amstart recently signing an exclusivity deal with another Spanish distributor called Indiecomps.{n}How will this case end? While we want to say that we'll know the results in several months, it seems like it will take years till the court issues some ruling.",
					image : investplussprite
				});
			}
		},
		{
			id : 'investplus-3',
			date : '6/2/3', // 1991
			getNotification : function (company) {
				return new Notification({
					header : "Industry News".localize(),
					text : "The results of the lawsuit Amstart vs Investrónics are finally in! No infringement of copyright from Investrónics' side.{n}The Court of First Instance in Madrid has ruled that while Amstart owns the 'Seinclaire' trademark, it has no right to enforce the copyright on the 'Spectre' trademark.{n}As expected, Amstart doesn't seem satisfied with this ruling, as they've already filed an appeal.{n}Furthermore, despite its win, Investrónics is finally discontinuing Invest Spectrum +, specifically {0}.{n}This marks the end of the 8-bit era in Spain, paving the way for more advanced 16-bit computers. While Invest Spectre + didn't impact the industry very much, it was fairly popular in the country. It, however, did not have the same degree of success in the UK.".localize().format(General.getETADescription('6/2/3', '6/5/3')),
					image : investplussprite
				});
			}
		},
		{
			id : 'investplus-4',
			date : '7/2/1', // 1993
			getNotification : function (company) {
				return new Notification({
					header : "Industry News".localize(),
					text : "The Spanish law has once again ruled in Investrónics favour - Amstart's now several-year-old appeal has been dismissed, as Provincial Court of Madrid has declared - just like Court of First Instance - that Amstart can't enforce copyright around the trademark 'Spectre'. However, that doesn't seem to bother Amstart, as it once again appealed.",
					image : investplussprite
				});
			}
		},
		{
			id : 'investplus-5',
			date : '7/5/2', // 1993
			getNotification : function (company) {
				return new Notification({
					header : "Industry News".localize(),
					text : "Even though Invest Spectre + has been already discontinued for a while, the lawsuit from Amstart against Investrónics still rages on. The newest ruling is in the latter's favour.{n}However, this didn't stop Amstart from filing another appeal. It is now expected that the case will be soon dealt with on Spain's Supreme Court's floor.{n}While we don't expect the result to differ from the previous ones, who knows? We might get surprised...",
					image : investplussprite
				});
			}
		},
		{
			id : 'investplus-6',
			date : '9/10/1', // September 1997
			getNotification : function (company) {
				return new Notification({
					header : "Industry News".localize(),
					text : "After a tiring and long battle about the 'Seinclaire' and 'Spectre' trademarks, the Supreme Court of Spain has finally issued its decision regarding the Amstart's lawsuit against Investrónics.{n}The result? Investrónics is still on the right side of the law.{n}Since the ruling came from the Supreme Court, Amstart can't file any more appeals and is expected to pay for the costs of all the proceedings regarding the case. This finally means the end of this several-year-long trademark saga.",
					image : investplussprite
				});
			}
		}
	]
});

GDT.addPlatform({
	id : 'decibels',
	name : 'Decibels dB Spectre+',
	company : 'Decibels Electronics Limited',
	startAmount : 0.009,
	unitsSold : 0.009, // 50 000 units. Multiplier: 0.18
	licencePrize : 5000,
	published : '4/7/1', // 1988
	platformRetireDate : '5/11/2', // 1990
	developmentCosts : 2000,
	genreWeightings : [0.8, 1, 1, 0.6, 0.8, 0.9],
	audienceWeightings : [0.8, 1, 1],
	techLevel : 2,
	iconUri : decibelssprite,
	events : [{
			id : 'decibels-1',
			date : '4/7/1',
			getNotification : function (company) {
				return new Notification({
					header : "Industry News".localize(),
					text : "An Indian company named Decibels Electronics Limited has just released a new official CX Spectre+ clone.{n}It's called Decibels dB Spectre+ and it's pretty similar to the original device, both from the inside and outside. It is, however, focused only on the Indian market.{n}It seems unlikely that we'll see this device released in the West. Nevertheless, if you happen to visit India, you can purchase it for a low price of 55kr.",
					image : decibelssprite
				});
			}
		},
		{
			id : 'decibels-2',
			date : '5/7/1', // cca 1990
			getNotification : function (company) {
				return new Notification({
					header : "Industry News".localize(),
					text : "Decibels Electronics Limited has annouced the discontinuation of Decibels dB Spectre+. The device will be pulled from the market {0}.{n}The system was very successful in India, selling around 50,000 units and achieving over 80% of market share. However, the interest around the device has died quite quickly, which is the reason for its short time on the market.".localize().format(General.getETADescription('5/7/1', '5/11/2')),
					image : decibelssprite
				});
			}
		}
	]
});