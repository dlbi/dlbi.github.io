export const researchpjs = [
  {
    imgSrc: "./img/projects/quan-sleep.png",
    content:
      "<strong>Advancing Sleep Stage Scoring with Deep Learning.</strong> We have developed a series of models for automatic sleep stage scoring using raw, single-channel EEG. <a href='https://github.com/akaraspt/deepsleepnet' class='text-blue-600 dark:text-blue-500 no-underline hover:underline'>DeepSleepNet</a> is a robust deep learning model designed for this purpose, further improved into the efficient and lightweight <a href='https://github.com/akaraspt/tinysleepnet' class='text-blue-600 dark:text-blue-500 no-underline hover:underline'>TinySleepNet</a>, which is optimized for deployment on wearable devices. Additionally, we introduced a novel method for <a href='https://github.com/akaraspt/transferability_sleep' class='text-blue-600 dark:text-blue-500 no-underline hover:underline'>quantifying the transferability</a> of sleep stage scoring models. This approach evaluates the impact of diverse data characteristics on model performance by training and testing models with varying architectures, such as TinySleepNet and U-Time, under transfer configurations with differences in recording channels, environments, and subject conditions.",
  },
  {
    imgSrc: "./img/projects/weak-nph.png",
    content:
      "<strong>Deep Learning Models for Brain CT Classification.</strong> We develop a new weak supervision method for training a CSF segmentation model as a feature extractor for Normal Pressure Hydrocephalus (NPH) classification on brain CT scans. This approach aims to minimize the reliance on expensive segmentation annotations by neuroradiologists. Additionally, we are now working with two deep learning models that can directly classify brain CT scans without requiring segmentation, enabling efficient and accurate detection of NPH and other brain conditions. This shift represents a significant step toward streamlined, cost-effective diagnostic workflows in neuroimaging.",
  },
  {
    imgSrc: "./img/projects/mosquitosongp.png",
    content:
      "<strong>Noise-Robust Mosquito Species and Sex Classification.</strong> We develop a new deep learning model, <a href='https://github.com/akaraspt/mosquitosongp' class='text-blue-600 dark:text-blue-500 no-underline hover:underline'>MosquitoSong+</a>, to identify the species and sex of mosquitoes from raw wingbeat sounds so that it is robust to the environmental noise and the relative volume of the mosquito's flight tone.",
  },
  {
    imgSrc: "./img/projects/blink-al.png",
    content:
      "<strong>Quantifying Objective Blinking Parameters.</strong> We develop advanced algorithms for dynamic blink feature extraction using facial landmark detection models to precisely capture eyelid movement. These algorithms derive objective blinking parameters for each blink, which can be analyzed to train machine learning models. While initially applied for detecting facial nerve palsy (FNP), these parameters hold promise as reliable, objective metrics for diagnosing FNP, complementing facial asymmetry features explored in other studies. To further enhance the performance of eyelid keypoint detection (EKD) models, we also introduce a long-term active learning (AL) framework. This framework is designed to select the minimum number of frames for annotation from an expanding unlabeled pool, maximizing model performance for practical applications while minimizing annotation effort.",
  },
  {
    imgSrc: "./img/projects/asteroid.png",
    content:
      "<strong>Deep Learning for Asteroid Detection in Sky Exposures.</strong> In collaboration with the <a href='https://www.narit.or.th/en' class='text-blue-600 dark:text-blue-500 no-underline hover:underline'>National Astronomical Research Institute of Thailand (NARIT)</a>, we propose an end-to-end deep learning model for asteroid detection that addresses limitations of existing methods, such as manual parameter settings and reliance on synthetic images. The model uses contrastive learning to extract distinct features from sequences of sky exposures, combined with additional learned features for accurate detection. This approach enables automated asteroid detection and complements existing software by identifying additional candidates.",
  },
];

// add link by use <a href = ""> </a> in content
