class swipePage {
    get swipeBtnMenu() { return $('~Swipe'); };

    get titleText() { return $('//*[@text="Swipe horizontal"]') };

    get descriptionText() { return $(`//*[@text="Or swipe vertical to find what I'm hiding."]`) }

    get compatibleTitleText() { return $('//*[@text="COMPATIBLE"]') };
}

export default new swipePage();