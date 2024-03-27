#!/bin/bash

# Compte le nombre de fichiers réguliers
num_regular=$(find . -maxdepth 1 -type f | wc -l)

# Compte le nombre de répertoires
num_directories=$(find . -maxdepth 1 -type d | wc -l)

# Affiche le total
echo $(($num_regular + $num_directories))
