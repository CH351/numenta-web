---
author: Jeff Hawkins
brief: "Artificial Intelligence techniques such as “deep learning” and “convolutional neural networks” have made stunning advancements in image recognition, self-driving cars, and other difficult tasks. Numerous AI companies have appeared to catch the wave of excitement as funding and acquisitions have accelerated. Yet, leading AI researchers realize something is not right."
date: 2017/11/14
hideImage: false
image: ../images/brain-lightbulb.png
org: Co-Founder
tags: numenta hierarchical temporal memory htm blog
title: "The Secret to Strong AI"
type: post
---

Artificial Intelligence techniques such as “deep learning” and “convolutional neural networks” have made stunning advancements in image recognition, self-driving cars, and other difficult tasks. Numerous AI companies have appeared to catch the wave of excitement as funding and acquisitions have accelerated.

Yet, leading AI researchers realize something is not right. Despite the impressive progress, current AI techniques are limited. For example, deep learning networks typically require millions of training examples before they start working correctly, while a human can learn something new with just a few exposures. This limits the type of applications where deep learning networks can be applied. And although their average accuracy is high, they can fail spectacularly. For example, a minor change in an image can cause an AI system to mistake a toothbrush for a baseball bat. In some applications, this type of error could cause a catastrophic failure, leading to death and injury. Because of these and other limitations, leaders in AI are beginning to suggest that a different approach is needed. Geoff Hinton, one of the most prominent AI scientists, recently said we need to start over when he explained he is **“deeply suspicious”** of current AI techniques. **“My view is throw it all away and start again.”** Francois Chollet, a leading practitioner of deep learning networks, has concluded, **“You cannot achieve general intelligence simply by scaling up today’s deep learning techniques.”**

Chollet suggests that deep learning is fundamentally limited while human intelligence is not. Indeed, the human brain is incredibly flexible. Humans not only drive cars, we build skyscrapers, manage farms, and program computers. Even our ability to pick up simple objects, such as coffee cups, and deftly manipulate them with our fingers is well beyond the ability of any AI system. Each of us has learned hundreds of complex skills that we mix and perform in rapid succession. Deep learning systems, on the other hand, work well only on a relatively small set of tasks, and they can only do one thing at a time. They must be completely retrained for each new task. Humans are general purpose learning machines; AI systems are not. The continued success of AI depends on getting past current limitations and making AI more general purpose.

Recently AI scientists have started to look to the brain for inspiration. Demis Hassibis, co-founder of Google’s DeepMind group, said, **“The human brain is the only existing proof we have that the sort of general intelligence we’re trying to build is even possible, so we think it’s worth putting the effort in to try and understand how it achieves these capabilities.”**


I agree. I have been studying the brain for over thirty years. In 2004, I wrote “On Intelligence,” a book which proposed how brain theory will be needed for AI. And in 2005 I co-founded Numenta, a company focused on reverse engineering the neocortex, the biggest part of the human brain and the part most associated with intelligence. We seek to understand what intelligence is by studying how the cells in your head work together to create perceptions and behavior. There are similarities between how the brain works and how current AI techniques work, which suggests AI is on the right track. But there are significant differences as well. Brains are not only far more capable than current AI systems, but the physical structure of the brain is far more complicated than the structure of artificial neural networks used in AI. The brain is doing things that current AI systems are not.

Numenta’s research has revealed several important principles the brain uses, principles that we believe AI will ultimately have to incorporate. For example, each neuron in the brain has thousands of synapses (the connections between neurons). What most of these synapses do was a mystery. We discovered that neurons use most of their synapses to make predictions. These predictions occur within the cell and play an essential role in how we anticipate the future. The artificial neurons used in AI do not have this feature and cannot make rich predictions as brains do. We also discovered why learning in the brain is achieved primarily by forming new synapses. This is a more powerful form of learning than modifying existing connections as practiced in deep learning. It explains how we learn new things quickly, without affecting previous learning.

While there are several other discoveries we have made that are essential for intelligence, I want to describe our most recent, and perhaps most important one. We were studying how we recognize objects by touch. From this we deduced a new property of the neocortex that applies not only to touch, but to vision, and to everything else the neocortex does. I sometimes refer to it as “the missing ingredient,” or as the title of this essay says, “the secret to strong AI.” We recently published a scientific [paper](https://doi.org/10.3389/fncir.2017.00081) detailing this discovery; I will summarize it here.

![Secret to Strong AI](../images/cup.png)

Look at this image. It is obviously a cup. But, of course, it isn’t actually a cup, it is a collection of lines on a flat surface. Surprisingly, it is difficult to see this image for what it is, a collection of lines on a flat surface, and not as a three-dimensional cup. A common belief among brain scientists is that the neocortex takes the image from the eyes, and through a series of steps, extracts more and more complex features until it can recognize the image. This is how deep learning networks work, too. This process is called pattern recognition, and deep learning networks are good at it. After training on many images, they can take a new image and tell you what it is. But they don’t understand what the object is beyond its label. In contrast, when you see an image, you immediately perceive its three-dimensional shape. You can imagine how it would look from different angles, that it might hold liquid, and even what it would feel like if you touched it. A deep learning network is good at putting a label on an image without understanding what it is, whereas the neocortex understands the structure of an object and how it behaves.

Until recently, no one understood how the neocortex transforms a flat image into a mental representation of the real object. We figured out how the brain does this. We deduced that all the inputs to the neocortex are paired with a signal representing a “location.” When you look at the image of the cup, each part of the image, each line segment, is assigned a location relative to the three-dimensional cup. It is similar to how computers create CAD models of objects. Our theory explains why you perceive the cup in three dimensions, and why you can imagine what it would look like if you rotated it and what it would feel like if you touched it. It also explains why your perception of the cup is stable even as your eyes move and fixate at different locations on the image. As long as the input features are assigned to the correct locations relative to the cup, it doesn’t matter where the image appears relative to the retina.

We have been exploring the implications of this discovery and believe it can resolve many mysteries of how the brain works. Although we deduced this property by studying touch and then vision, the neural structures that determine the location signal exist in every part of the neocortex. This provocatively suggests that all processing in the neocortex is associated with locations, even if those locations do not correspond to physical locations in the world. It suggests that we manipulate abstract concepts using the same neural mechanisms we use to manipulate physical objects. Of course, manipulating concepts is a core feature of general intelligence.

How much AI needs to mimic the brain has been debated for decades. The recent success of deep learning, which is only loosely related to brains, has bolstered the argument that AI can advance without brain theory. But that success has also brought to the fore the limits of deep learning, making it more obvious that new approaches are needed. The brain is the obvious place to look for new ideas. As Jeff Bezos, CEO of Amazon, recently said, **“Humans are just doing something fundamentally different than the current way that we do machine learning and machine intelligence.”**

When it comes to building general purpose AI, we do not need to mimic everything the brain does. But some of the principles used by the brain cannot be ignored; they are essential for any system that exhibits general purpose intelligence. Through our research, we have discovered several of these essential principles. I believe our most recent discovery will prove to be the most important. It completely changes how we think sensory input to the brain is processed, and how the brain represents knowledge of the world.

Hopefully, as more AI practitioners recognize the limits to current AI techniques, they’ll also recognize that a roadmap for general AI is rapidly forming in the world of brain theory. It may take several years for the discoveries in brain theory to be fully integrated in AI, but for me, the roadmap for how to get there is clear.