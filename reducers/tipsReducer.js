import * as actions from '../actions/tipsActions'

export const initialState = {
    tips: [
        {
            id: 1,
            title: " Adjust your day-to-day behaviors",
            body: "To reduce energy consumption in your home, you do not necessarily need to go out and purchase energy efficient products. Energy conservation can be as simple as turning off lights or appliances when you do not need them. You can also use energy-intensive appliances less by performing household tasks manually, such as hang-drying your clothes instead of putting them in the dryer, or washing dishes by hand.The behavior adjustments that have the highest potential for utility savings are turning down the heat on your thermostat in the winter and using your air conditioner less in the summer. Heating and cooling costs constitute nearly half of an average home’s utility bills, so these reductions in the intensity and frequency of heating and cooling offer the greatest savings.There are tools you can use to figure out where most of your electricity is going in your home and which appliances are using the most electricity on a day-to-day basis. Use our calculator on the home tab :)"
        },
        {
            id: 2,
            title: "Replace your light bulbs",
            body: "Traditional incandescent light bulbs consume an excessive amount of electricity and must be replaced more often than their energy efficient alternatives. Halogen incandescent bulbs, compact fluorescent lights (CFLs), and light-emitting diode bulbs (LEDs) use anywhere from 25-80 percent less electricity and last 3 to 25 times longer than traditional bulbs.Although energy efficient bulbs are more expensive off the shelf, their efficient energy use and longer lifetimes mean that they cost less in the long run."
        },
        {
            id: 3,
            title: "Use smart power strips",
            body: "“Phantom loads,” or the electricity used by electronics when they are turned off or in standby mode, are a major source of energy waste. In fact, it is estimated that 75% of the energy used to power household electronics is consumed when they are switched off, which can cost you up to R3 000 per year. Smart power strips, also known as advanced power strips, eliminate the problem of phantom loads by shutting off the power to electronics when they are not in use. Smart power strips can be set to turn off at an assigned time, during a period of inactivity, through remote switches, or based on the status of a “master” device."
        },
        {
            id: 4,
            title: "Install a programmable or smart thermostat",
            body: "A programmable thermostat can be set to automatically turn off or reduce heating and cooling during the times when you are asleep or away. When you install a programmable thermostat, you eliminate wasteful energy use from heating and cooling without upgrading your HVAC system.On average, a programmable thermostat can save you R2 700 per year. Programmable thermostats come in different models that can be set to fit your weekly schedule. Additional features of programmable thermostats can include indicators for when to replace air filters or HVAC system problems, which also improve the efficiency of your heating and cooling system."
        },
        {
            id: 5,
            title: "Purchase energy efficient appliances",
            body: "On average, appliances are responsible for roughly 13% of total household energy use. When purchasing an appliance, you should pay attention to two numbers: the initial purchase price and the annual operating cost. Although energy efficient appliances might have higher upfront purchase prices, their operating costs are often 9-25% lower than conventional models. When purchasing an energy efficient appliance, you should look for appliances with the ENERGY STAR label, which is a federal guarantee that the appliance will consume less energy during use and when on standby than standard models. Energy savings differ based on the specific appliance. For example, ENERGY STAR certified clothes washers consume 25% less energy and 45% less water than conventional ones, whereas ENERGY STAR refrigerators use only 9% less energy"
        },
        {
            id: 6,
            title: "Reduce your water heating expenses",
            body: "Water heating is a major contributor to your total energy consumption. Other than purchasing an energy efficient water heater, there are three methods of reducing your water heating expenses: you can simply use less hot water, turn down the thermostat on your water heater, or insulate your water heater and the first six feet of hot and cold water pipes.If you are considering replacing your water heater with an efficient model, you should keep in mind two factors: the type of water heater that meets your needs and the type of fuel it will use. For example, tankless water heaters are energy efficient, but they are also a poor choice for large families as they cannot handle multiple and simultaneous uses of hot water. Efficient water heaters can be anywhere between 8% and 300% more energy efficient than a conventional storage water heater."
        },
        {
            id: 7,
            title: "Install energy efficient windows",
            body: "Windows are significant source of energy waste - they can add up to 10 - 25% of your total heating bill. To prevent heat loss through your windows, you can replace single-pane windows with double-pane products instead.For homes in colder regions, gas-filled windows with “low-e” coatings can significantly reduce your heating expenses. In addition, interior or exterior storm windows can reduce unnecessary heat loss by 10 to 20 percent. You should especially consider storm windows if your region experiences frequent extreme weather events. In warmer climates, heat gain through windows may be a problem. In addition to minimizing heat loss, low-e coatings on windows can reduce heat gain by reflecting more light and lowering the amount of thermal energy that enters your home. Depending on where you live, ENERGY STAR windows can save you R300 - R1 500 each year on your utility bills. Window shades, shutters, screens, and awnings can also provide an extra layer of insulation between your home and outside temperatures, leading to even more energy conservation."
        },
        {
            id: 8,
            title: "Upgrade your HVAC system",
            body: "An HVAC system is composed of heating, ventilation, and air conditioning equipment. Heating alone is responsible for more than 40% of home energy use. Air conditioning, by comparison, isn’t a significant contributor to energy bills – on average, it only makes up six percent of the total energy use of your home. ENERGY STAR central air conditioning units are eight percent more efficient than conventional models. Air conditioning systems are usually integrated with heating systems, which means that you should purchase your new furnace and air conditioner at the same time in order to ensure that the air conditioner performs at its maximum rated energy efficiency. Upgrades to the third component of an HVAC system – ventilation – can also improve your energy efficiency. A ventilation system is composed of a network of ducts, which distributes hot and cold air throughout your home. If these ducts are not properly sealed or insulated, the resulting energy waste can add hundreds of dollars to your annual heating and cooling expenses. Proper insulation and maintenance on your ventilation system can reduce your heating and cooling expenses by up to 20%."
        },
        {
            id: 9,
            title: "Weatherize your home",
            body: "Weatherizing, or sealing air leaks around your home, is a great way to reduce your heating and cooling expenses. The most common sources of air leaks into your home are vents, windows, and doors. To prevent these leaks, you should ensure that there are no cracks or openings between the wall and vent, window, or doorframe. To seal air leaks between stationary objects, such as the wall and window frame, you can apply caulk. For cracks between moving objects, such as operable windows and doors, you can apply weather stripping. Weather stripping and caulking are simple air sealing techniques that typically offer a return on investment in less than a year. Air leaks can also occur through openings in the wall, floor, and ceiling from plumbing, ducting, or electrical wiring. Air leaking out of your home is most often from the home interior into your attic through small openings. Whether it is through ducts, light fixtures, or the attic hatch, hot air will rise and escape through small openings. As the natural flow of heat is from warmer to cooler areas, these small openings can make your heating bill even higher if your attic is not sufficiently insulated. To reap the full amount of savings from weatherization, you should consider fully insulating your home."
        },
        {
            id: 10,
            title: "Insulate your home",
            body: "Insulation plays a key role in lowering your utility bills through retaining heat during the winter and keeping heat out of your home during the summer. The recommended level of heat resistance, or “R-value,” for your insulation depends on where you live. In warmer climates, the recommended R-value is much lower than for buildings located in colder regions like the Northeast. The level of insulation you should install depends on the area of your house. Your attic, walls, floors, basement, and crawlspace are the five main areas where you should consider adding insulation. "
        },
    ]
}

export default function tipsReducer(state=initialState, action){
    switch(action.type){
        case actions.GET_TIPS:
            return{
                ...state
            }
        default:
            return state
    }
}